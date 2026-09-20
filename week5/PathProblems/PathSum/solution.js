/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  const queue = [[root, root.val]];

  while (queue.length) {
    const [node, sum] = queue.shift();

    if (!node.left && !node.right && sum === targetSum) {
      return true;
    }

    if (node.left) queue.push([node.left, sum + node.left.val]);
    if (node.right) queue.push([node.right, sum + node.right.val]);
  }

  return false;
};

module.exports = hasPathSum;
