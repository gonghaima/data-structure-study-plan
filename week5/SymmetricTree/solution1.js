/**
 * Iterative approach using a queue (BFS).
 *
 * Push pairs of nodes that should mirror each other. Pop two at a time
 * and compare them, then push their children in mirrored order.
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  const queue = [root.left, root.right];

  while (queue.length) {
    const left = queue.shift();
    const right = queue.shift();

    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }

  return true;
};

module.exports = isSymmetric;
