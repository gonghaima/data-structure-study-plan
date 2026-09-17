/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  const remaining = targetSum - root.val;

  if (!root.left && !root.right) {
    return remaining === 0;
  }

  return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
};

module.exports = hasPathSum;
