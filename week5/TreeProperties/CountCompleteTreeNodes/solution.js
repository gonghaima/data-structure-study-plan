/**
 * @param {TreeNode} root
 * @return {number}
 */

// Naive recursive traversal
// O(n) time, O(h) space (recursion stack)
// Visits every node — doesn't exploit the "complete tree" property at all.

var countNodes = function (root) {
    if (!root) return 0;
    return 1 + countNodes(root.left) + countNodes(root.right);
};

module.exports = countNodes;
