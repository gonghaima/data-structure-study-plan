/**
 * Pure divide-and-conquer: no outer closure variable is mutated. Each call
 * returns both pieces of information its parent needs:
 *   - through: the best single downward chain starting at this node (what
 *     a parent can extend upward)
 *   - best: the best complete path found anywhere in this subtree so far
 * The parent combines its children's results into its own pair and passes
 * that up, so the final answer is just the root call's `best`.
 *
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  function solve(node) {
    if (!node) return { through: 0, best: -Infinity };

    const left = solve(node.left);
    const right = solve(node.right);

    const leftGain = Math.max(left.through, 0);
    const rightGain = Math.max(right.through, 0);

    const through = node.val + Math.max(leftGain, rightGain);
    const best = Math.max(
      node.val + leftGain + rightGain,
      left.best,
      right.best
    );

    return { through, best };
  }

  return solve(root).best;
};

module.exports = maxPathSum;
