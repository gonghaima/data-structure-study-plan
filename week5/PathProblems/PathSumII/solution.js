/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];
  const path = [];

  function dfs(node, remaining) {
    if (!node) return;

    path.push(node.val);
    const nextRemaining = remaining - node.val;

    if (!node.left && !node.right) {
      if (nextRemaining === 0) {
        result.push([...path]);
      }
    } else {
      dfs(node.left, nextRemaining);
      dfs(node.right, nextRemaining);
    }

    path.pop();
  }

  dfs(root, targetSum);
  return result;
};

module.exports = pathSum;
