/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  function dfs(node, num) {
    if (!node) return 0;

    num = num * 10 + node.val;

    if (!node.left && !node.right) {
      return num;
    }

    return dfs(node.left, num) + dfs(node.right, num);
  }

  return dfs(root, 0);
};

module.exports = sumNumbers;
