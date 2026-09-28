/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];
  if (!root) return result;

  // queue of [node, pathSoFar, remainingSum]
  const queue = [[root, [root.val], targetSum - root.val]];

  while (queue.length) {
    const [node, path, remaining] = queue.shift();

    if (!node.left && !node.right) {
      if (remaining === 0) {
        result.push(path);
      }
      continue;
    }

    if (node.left) {
      queue.push([
        node.left,
        [...path, node.left.val],
        remaining - node.left.val
      ]);
    }
    if (node.right) {
      queue.push([
        node.right,
        [...path, node.right.val],
        remaining - node.right.val
      ]);
    }
  }

  return result;
};

module.exports = pathSum;
