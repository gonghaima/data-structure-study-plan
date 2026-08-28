/**
 * Solution 1: Iterative with Stack
 *
 * Push root onto stack, then repeatedly pop a node, add its value to result,
 * and push its children in reverse order so the leftmost child is processed first.
 *
 * Time: O(n) — visit each node once
 * Space: O(n) — stack holds at most all nodes in the widest level
 *
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];

    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);

        // Push children right-to-left so leftmost child is on top
        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }

    return result;
};

module.exports = preorder;
