/**
 * Brute force: for every node in the tree, count downward paths that start
 * at that node and sum to targetSum. No shared state between nodes, so
 * nothing needs to be undone/backtracked — just two nested recursions.
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;

  function countFrom(node, remaining) {
    if (!node) return 0;

    let count = remaining - node.val === 0 ? 1 : 0;
    count += countFrom(node.left, remaining - node.val);
    count += countFrom(node.right, remaining - node.val);
    return count;
  }

  return (
    countFrom(root, targetSum) +
    pathSum(root.left, targetSum) +
    pathSum(root.right, targetSum)
  );
};

module.exports = pathSum;
