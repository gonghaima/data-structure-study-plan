/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  // TODO: Implement your solution here
  const rtVals = [];
  const inOrderRtVals = (root) => {
    if (!root) {
      rtVals.push('#');
      return;
    }
    inOrderRtVals(root.left);
    inOrderRtVals(root.right);
    rtVals.push('^' + root.val + '$');
  };
  inOrderRtVals(root);

  const sbrtVals = [];
  const inOrdersbrtVals = (root) => {
    if (!root) {
      sbrtVals.push('#');
      return;
    }
    inOrdersbrtVals(root.left);
    inOrdersbrtVals(root.right);
    sbrtVals.push('^' + root.val + '$');
  };
  inOrdersbrtVals(subRoot);

  const a = rtVals.join('.');
  const b = sbrtVals.join('.');
  return a.indexOf(b) !== -1;
};

module.exports = isSubtree;
