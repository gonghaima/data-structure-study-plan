/**
 * Serialization approach.
 *
 * Traverse the left subtree left-to-right and the right subtree
 * right-to-left, recording each value (using a sentinel for nulls
 * so structure is captured, not just values). A tree is symmetric
 * exactly when the two serialized sequences are identical.
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  const leftTrace = [];
  const rightTrace = [];

  function traverse(node, trace, order) {
    if (!node) {
      trace.push(null);
      return;
    }

    trace.push(node.val);
    const [first, second] = order === 'LR' ? [node.left, node.right] : [node.right, node.left];
    traverse(first, trace, order);
    traverse(second, trace, order);
  }

  traverse(root.left, leftTrace, 'LR');
  traverse(root.right, rightTrace, 'RL');

  if (leftTrace.length !== rightTrace.length) return false;

  return leftTrace.every((val, i) => val === rightTrace[i]);
};

module.exports = isSymmetric;
