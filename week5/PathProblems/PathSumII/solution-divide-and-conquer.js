/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return [];

  if (!root.left && !root.right) {
    return root.val === targetSum ? [[root.val]] : [];
  }

  const remaining = targetSum - root.val;
  const paths = [];

  for (const child of [root.left, root.right]) {
    if (!child) continue;
    for (const childPath of pathSum(child, remaining)) {
      paths.push([root.val, ...childPath]);
    }
  }

  return paths;
};

module.exports = pathSum;
