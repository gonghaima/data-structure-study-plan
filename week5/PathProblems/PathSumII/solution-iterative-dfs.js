/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];
  if (!root) return result;

  // stack of [node, pathSoFar, remainingSum]
  const stack = [[root, [root.val], targetSum - root.val]];

  while (stack.length) {
    const [node, path, remaining] = stack.pop();

    if (!node.left && !node.right) {
      if (remaining === 0) {
        result.push(path);
      }
      continue;
    }

    if (node.left) {
      stack.push([
        node.left,
        [...path, node.left.val],
        remaining - node.left.val
      ]);
    }
    if (node.right) {
      stack.push([
        node.right,
        [...path, node.right.val],
        remaining - node.right.val
      ]);
    }
  }

  return result;
};

module.exports = pathSum;
