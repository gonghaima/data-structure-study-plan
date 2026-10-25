/**
 * Brute force: for every node, independently recompute the best downward
 * chain from each of its children from scratch (no memoization/sharing of
 * work between nodes), then combine them into the best path through that
 * node. This is the naive approach someone reaches for before noticing
 * that `maxDownward` is being recomputed redundantly for every ancestor,
 * which the post-order DFS solutions avoid by computing each subtree's
 * gain exactly once.
 *
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let best = -Infinity;

  function maxDownward(node) {
    if (!node) return 0;
    return node.val + Math.max(0, maxDownward(node.left), maxDownward(node.right));
  }

  function traverse(node) {
    if (!node) return;

    const leftGain = Math.max(0, maxDownward(node.left));
    const rightGain = Math.max(0, maxDownward(node.right));
    best = Math.max(best, node.val + leftGain + rightGain);

    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return best;
};

module.exports = maxPathSum;
