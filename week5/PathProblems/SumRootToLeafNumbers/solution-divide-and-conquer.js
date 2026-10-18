/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  function paths(node) {
    if (!node) return [];
    if (!node.left && !node.right) return [String(node.val)];

    const result = [];
    for (const child of [node.left, node.right]) {
      if (!child) continue;
      for (const childPath of paths(child)) {
        result.push(node.val + childPath);
      }
    }
    return result;
  }

  return paths(root).reduce((sum, numStr) => sum + Number(numStr), 0);
};

module.exports = sumNumbers;
