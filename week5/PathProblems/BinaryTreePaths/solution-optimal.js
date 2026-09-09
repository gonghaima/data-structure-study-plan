/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];
  if (!root) return result;

  const stack = [[root, 0]]; // [node, depth]
  const path = [];

  while (stack.length) {
    const [node, depth] = stack.pop();
    path.length = depth;
    path.push(node.val);

    if (!node.left && !node.right) {
      result.push(path.join('->'));
    } else {
      if (node.right) stack.push([node.right, depth + 1]);
      if (node.left) stack.push([node.left, depth + 1]);
    }
  }

  return result;
};

module.exports = binaryTreePaths;
