/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  const stack = [[root, root.val]];

  while (stack.length) {
    const [node, sum] = stack.pop();

    if (!node.left && !node.right && sum === targetSum) {
      return true;
    }

    if (node.left) stack.push([node.left, sum + node.left.val]);
    if (node.right) stack.push([node.right, sum + node.right.val]);
  }

  return false;
};

module.exports = hasPathSum;
