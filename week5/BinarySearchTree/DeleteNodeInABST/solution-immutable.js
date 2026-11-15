/**
 * Immutable/persistent-style deletion: instead of mutating the existing
 * tree, builds a new node for every node along the path from the root to
 * the target, reusing (sharing, not copying) every subtree that doesn't
 * need to change. Uses the same in-order-successor strategy as solution.js
 * for the two-children case, so results match testData.js exactly - only
 * the original tree passed in is left untouched, unlike every other
 * solution in this folder.
 *
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;

  if (key < root.val) {
    return { val: root.val, left: deleteNode(root.left, key), right: root.right };
  }

  if (key > root.val) {
    return { val: root.val, left: root.left, right: deleteNode(root.right, key) };
  }

  if (!root.left) return root.right;
  if (!root.right) return root.left;

  let successor = root.right;
  while (successor.left) successor = successor.left;

  return {
    val: successor.val,
    left: root.left,
    right: deleteNode(root.right, successor.val)
  };
};

module.exports = deleteNode;
