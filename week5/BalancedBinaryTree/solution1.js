/**
 * Top-down DFS recursive
 * Computes height of each subtree separately per node, then recurses on children.
 * Simpler to reason about but recomputes heights — O(n^2) worst case for skewed trees.
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const height = (node) => {
    if (!node) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
  };

  if (!root) return true;
  return (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

module.exports = isBalanced;
