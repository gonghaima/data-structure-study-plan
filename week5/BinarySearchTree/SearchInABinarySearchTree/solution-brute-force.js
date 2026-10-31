/**
 * Generic tree search that ignores the BST ordering property entirely —
 * it would work on any binary tree, not just a BST. Every node is visited
 * via DFS with an explicit stack until a match is found, instead of using
 * val's comparison to root.val to discard half the tree at each step.
 *
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return null;

  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (node.val === val) return node;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return null;
};

module.exports = searchBST;
