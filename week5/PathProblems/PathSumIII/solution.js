/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  const prefixCount = new Map();
  prefixCount.set(0, 1);

  function dfs(node, currentSum) {
    if (!node) return 0;

    currentSum += node.val;
    let count = prefixCount.get(currentSum - targetSum) || 0;

    prefixCount.set(currentSum, (prefixCount.get(currentSum) || 0) + 1);

    count += dfs(node.left, currentSum);
    count += dfs(node.right, currentSum);

    prefixCount.set(currentSum, prefixCount.get(currentSum) - 1);

    return count;
  }

  return dfs(root, 0);
};

module.exports = pathSum;
