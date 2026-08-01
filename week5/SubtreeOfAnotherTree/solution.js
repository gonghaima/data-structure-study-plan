/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  // TODO: Implement your solution here
  const rtVals = [];
  const inOrderRtVals = (root) => {
    if (!root) return;
    if (root.left) inOrderRtVals(root.left);
    if (root.right) inOrderRtVals(root.right);
    rtVals.push(root.val);
  };
  inOrderRtVals(root);

  const sbrtVals = [];
  const inOrdersbrtVals = (root) => {
    if (!root) return;
    if (root.left) inOrdersbrtVals(root.left);
    if (root.right) inOrdersbrtVals(root.right);
    sbrtVals.push(root.val);
  };
  inOrdersbrtVals(subRoot);

  const a = rtVals.join('.');
  const b = sbrtVals.join('.');
  return a.indexOf(b) !== -1;
};

module.exports = isSubtree;
