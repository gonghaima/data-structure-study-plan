/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const travelSal = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return (
      a.val === b.val &&
      travelSal(a.left, b.left) &&
      travelSal(a.right, b.right)
    );
  };
  return travelSal(p, q);
};

module.exports = isSameTree;
