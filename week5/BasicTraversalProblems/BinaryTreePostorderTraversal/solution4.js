/**
 * Morris Traversal - O(n) time, O(1) space
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  return [
    ...postorderTraversal(root.left),
    ...postorderTraversal(root.right),
    root.val,
  ];
};

module.exports = postorderTraversal;
