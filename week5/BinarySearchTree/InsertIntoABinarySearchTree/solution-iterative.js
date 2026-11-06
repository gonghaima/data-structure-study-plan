/**
 * Iterative BST insertion: walk down with an explicit loop to find the
 * null child slot where the new value belongs, then attach it directly
 * instead of rebuilding each ancestor's pointer on the way back up.
 *
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  const newNode = { val, left: null, right: null };
  if (!root) return newNode;

  let node = root;
  while (true) {
    if (val < node.val) {
      if (!node.left) {
        node.left = newNode;
        break;
      }
      node = node.left;
    } else {
      if (!node.right) {
        node.right = newNode;
        break;
      }
      node = node.right;
    }
  }

  return root;
};

module.exports = insertIntoBST;
