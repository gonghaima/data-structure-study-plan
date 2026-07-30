/**
 * Serialization - preorder-encode both trees with null markers, then compare strings
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const serialize = (node) => {
    if (!node) return '#';
    return `${node.val},${serialize(node.left)},${serialize(node.right)}`;
  };
  return serialize(p) === serialize(q);
};

module.exports = isSameTree;
