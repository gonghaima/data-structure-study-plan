/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];
  if (!root) return result;

  // stack of [node, pathSoFar] pairs
  const stack = [[root, String(root.val)]];

  while (stack.length) {
    const [node, path] = stack.pop();

    if (!node.left && !node.right) {
      result.push(path);
      continue;
    }

    if (node.left) stack.push([node.left, path + '->' + node.left.val]);
    if (node.right) stack.push([node.right, path + '->' + node.right.val]);
  }

  return result;
};

module.exports = binaryTreePaths;
