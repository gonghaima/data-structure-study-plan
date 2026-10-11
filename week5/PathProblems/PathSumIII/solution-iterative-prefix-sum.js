/**
 * Iterative version of the prefix-sum + hashmap approach (see solution.js).
 * Recursion naturally knows when a node's entire subtree is finished (right
 * after both recursive calls return) so it can backtrack the map at the
 * right moment. An explicit stack has no such built-in signal, so each
 * node is pushed twice: once as an 'enter' frame (do the increment, queue
 * up children) and once as an 'exit' frame (do the backtrack decrement),
 * with the exit frame pushed *before* the children so it only gets popped
 * after both subtrees have been fully processed.
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;

  const prefixCount = new Map();
  prefixCount.set(0, 1);
  let count = 0;

  const stack = [{ node: root, parentSum: 0, phase: 'enter' }];

  while (stack.length) {
    const frame = stack.pop();

    if (frame.phase === 'enter') {
      const currentSum = frame.parentSum + frame.node.val;
      count += prefixCount.get(currentSum - targetSum) || 0;
      prefixCount.set(currentSum, (prefixCount.get(currentSum) || 0) + 1);

      stack.push({ node: frame.node, currentSum, phase: 'exit' });

      if (frame.node.right) {
        stack.push({ node: frame.node.right, parentSum: currentSum, phase: 'enter' });
      }
      if (frame.node.left) {
        stack.push({ node: frame.node.left, parentSum: currentSum, phase: 'enter' });
      }
    } else {
      prefixCount.set(frame.currentSum, prefixCount.get(frame.currentSum) - 1);
    }
  }

  return count;
};

module.exports = pathSum;
