/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];
  if (!root) return result;

  const path = [];

  function dfs(node) {
    path.push(node.val);

    if (!node.left && !node.right) {
      result.push(path.join('->'));
    } else {
      if (node.left) dfs(node.left);
      if (node.right) dfs(node.right);
    }

    path.pop();
  }

  dfs(root);
  return result;
};

module.exports = binaryTreePaths;
