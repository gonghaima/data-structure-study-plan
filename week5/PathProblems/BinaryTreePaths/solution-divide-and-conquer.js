/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return [];
  if (!root.left && !root.right) return [String(root.val)];

  const paths = [];
  for (const child of [root.left, root.right]) {
    if (!child) continue;
    for (const childPath of binaryTreePaths(child)) {
      paths.push(root.val + '->' + childPath);
    }
  }

  return paths;
};

module.exports = binaryTreePaths;
