/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const isSameTree = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return a.val === b.val && isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
  };

  const dfs = (node) => {
    if (!node) return false;
    if (isSameTree(node, subRoot)) return true;
    return dfs(node.left) || dfs(node.right);
  };

  return dfs(root);
};

module.exports = isSubtree;
