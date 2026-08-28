/**
 * @param {TreeNode} root
 * @return {number}
 */

// Iterative BFS (level-order) traversal
// O(n) time, O(n) space (widest level held in the queue)
// Same complexity as the naive recursion, just without the call stack.

var countNodes = function (root) {
    if (!root) return 0;

    let count = 0;
    const queue = [root];

    while (queue.length) {
        const node = queue.shift();
        count++;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return count;
};

module.exports = countNodes;
