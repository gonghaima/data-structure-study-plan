/**
 * DFS iterative (stack)
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  let min = Infinity;
  const stack = [[root, 1]];
  while (stack.length > 0) {
    const [node, depth] = stack.pop();
    if (!node.left && !node.right) {
      min = Math.min(min, depth);
    }
    if (node.left) stack.push([node.left, depth + 1]);
    if (node.right) stack.push([node.right, depth + 1]);
  }
  return min;
};

module.exports = minDepth;
