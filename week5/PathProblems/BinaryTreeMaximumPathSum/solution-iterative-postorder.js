/**
 * Iterative post-order DFS using an explicit stack instead of recursion.
 * Each node is pushed twice: once to schedule its children, once (marked
 * "processed") to combine their already-computed gains. A Map stores each
 * node's max downward gain so the "processed" visit can read its children's
 * results back out, mirroring what the recursive call stack does implicitly.
 *
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  const gain = new Map();
  gain.set(null, 0);

  let best = -Infinity;
  const stack = [[root, false]];

  while (stack.length) {
    const [node, processed] = stack.pop();
    if (!node) continue;

    if (!processed) {
      stack.push([node, true]);
      if (node.left) stack.push([node.left, false]);
      if (node.right) stack.push([node.right, false]);
      continue;
    }

    const leftGain = Math.max(gain.get(node.left), 0);
    const rightGain = Math.max(gain.get(node.right), 0);

    best = Math.max(best, node.val + leftGain + rightGain);
    gain.set(node, node.val + Math.max(leftGain, rightGain));
  }

  return best;
};

module.exports = maxPathSum;
