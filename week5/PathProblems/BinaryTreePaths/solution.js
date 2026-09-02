/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // TODO: Implement your solution here
  //   const allPath = [];
  const allPath = new Set();
  function getPath(node, cPath) {
    if (!node) {
      //   allPath.push(cPath);
      allPath.add(cPath);
      return cPath;
    }
    if (!cPath) cPath = node.val + '';
    else cPath = cPath + '->' + node.val;
    getPath(node.left, cPath);
    getPath(node.right, cPath);
    return cPath;
  }
  getPath(root);
  return Array.from(allPath);
};

module.exports = binaryTreePaths;
