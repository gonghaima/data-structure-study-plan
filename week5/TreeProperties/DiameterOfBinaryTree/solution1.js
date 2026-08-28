/**
 * Iterative post-order DFS using an explicit stack.
 * Avoids recursion; heights stored in a Map keyed by node reference.
 *
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;

    let max = 0;
    const heights = new Map();
    const stack = [];
    let node = root;
    let lastVisited = null;

    while (node || stack.length) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            const peek = stack[stack.length - 1];
            if (peek.right && lastVisited !== peek.right) {
                node = peek.right;
            } else {
                stack.pop();
                const left = heights.get(peek.left) || 0;
                const right = heights.get(peek.right) || 0;
                max = Math.max(max, left + right);
                heights.set(peek, 1 + Math.max(left, right));
                lastVisited = peek;
            }
        }
    }

    return max;
};

module.exports = diameterOfBinaryTree;
