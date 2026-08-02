/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const serialize = (node) => {
    if (!node) return ',#';
    return ',' + node.val + serialize(node.left) + serialize(node.right);
  };
  return serialize(root).indexOf(serialize(subRoot)) !== -1;
};

module.exports = isSubtree;
