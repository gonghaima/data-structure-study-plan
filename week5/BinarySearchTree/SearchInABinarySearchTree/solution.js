/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
};

module.exports = searchBST;
