/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  // TODO: Implement your solution here
  const dfs = (node) => {
    if (!node) return 0;
    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);
    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  };
  return dfs(root) !== -1;
};

module.exports = isBalanced;
