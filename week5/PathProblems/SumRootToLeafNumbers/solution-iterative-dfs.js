/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  if (!root) return 0;

  let total = 0;
  const stack = [[root, root.val]];

  while (stack.length) {
    const [node, num] = stack.pop();

    if (!node.left && !node.right) {
      total += num;
      continue;
    }

    if (node.left) stack.push([node.left, num * 10 + node.left.val]);
    if (node.right) stack.push([node.right, num * 10 + node.right.val]);
  }

  return total;
};

module.exports = sumNumbers;
