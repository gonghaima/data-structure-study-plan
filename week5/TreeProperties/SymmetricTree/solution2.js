/**
 * Iterative approach using a stack (DFS).
 *
 * Same idea as the queue-based version, but a stack is used instead,
 * so nodes are compared depth-first rather than level-by-level.
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  const stack = [[root.left, root.right]];

  while (stack.length) {
    const [left, right] = stack.pop();

    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    stack.push([left.left, right.right]);
    stack.push([left.right, right.left]);
  }

  return true;
};

module.exports = isSymmetric;
