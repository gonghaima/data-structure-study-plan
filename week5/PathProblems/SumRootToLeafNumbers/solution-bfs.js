/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  if (!root) return 0;

  let total = 0;
  const queue = [[root, root.val]];

  while (queue.length) {
    const [node, num] = queue.shift();

    if (!node.left && !node.right) {
      total += num;
      continue;
    }

    if (node.left) queue.push([node.left, num * 10 + node.left.val]);
    if (node.right) queue.push([node.right, num * 10 + node.right.val]);
  }

  return total;
};

module.exports = sumNumbers;
