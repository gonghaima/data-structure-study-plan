/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let best = -Infinity;

  function maxGain(node) {
    if (!node) return 0;

    const leftGain = Math.max(maxGain(node.left), 0);
    const rightGain = Math.max(maxGain(node.right), 0);

    best = Math.max(best, node.val + leftGain + rightGain);

    return node.val + Math.max(leftGain, rightGain);
  }

  maxGain(root);
  return best;
};

module.exports = maxPathSum;
