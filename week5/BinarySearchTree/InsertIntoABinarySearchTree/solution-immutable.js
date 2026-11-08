/**
 * Immutable/persistent-style insertion: instead of mutating the existing
 * tree, builds a new node for every node along the path from the root to
 * the insertion point, reusing (sharing, not copying) every subtree that
 * doesn't need to change. The original tree passed in is left untouched.
 *
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) return { val, left: null, right: null };

  if (val < root.val) {
    return { val: root.val, left: insertIntoBST(root.left, val), right: root.right };
  }

  return { val: root.val, left: root.left, right: insertIntoBST(root.right, val) };
};

module.exports = insertIntoBST;
