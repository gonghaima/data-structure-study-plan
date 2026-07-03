/**
 * Naive O(n²) approach: compute height separately for every node.
 * Clearest to reason about but recomputes subtree heights redundantly.
 *
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;

    const leftHeight = height(root.left);
    const rightHeight = height(root.right);
    const throughRoot = leftHeight + rightHeight;

    const leftDiameter = diameterOfBinaryTree(root.left);
    const rightDiameter = diameterOfBinaryTree(root.right);

    return Math.max(throughRoot, leftDiameter, rightDiameter);
};

function height(node) {
    if (!node) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
}

module.exports = diameterOfBinaryTree;
