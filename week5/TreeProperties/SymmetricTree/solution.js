/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // An empty tree is technically symmetric
  if (!root) return true;

  function isMirror(left, right) {
    // Base case: both nodes are null
    if (!left && !right) return true;

    // One node is null, but the other isn't
    if (!left || !right) return false;

    // Values don't match, or subtrees aren't mirrors
    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  }

  return isMirror(root.left, root.right);
};

module.exports = isSymmetric;
