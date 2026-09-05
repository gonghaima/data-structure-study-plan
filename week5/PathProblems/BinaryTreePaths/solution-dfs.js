/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // TODO: Implement your solution here
  const allPath = [];
  function getPath(node, cPath) {
    if (!node) return;

    // build the path for the current node
    cPath = cPath ? cPath + '->' + node.val : String(node.val);

    // leaf → record the path
    if (!node.left && !node.right) {
      allPath.push(cPath);
      return;
    }

    // otherwise continue
    getPath(node.left, cPath);
    getPath(node.right, cPath);
  }

  getPath(root, '');
  return allPath;
};

module.exports = binaryTreePaths;
