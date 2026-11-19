/**
 * Iterative in-order traversal using an explicit stack: push every left
 * child on the way down, then pop (visit) and move right, same as the
 * recursive version but without the call stack. Stops and returns as soon
 * as the kth node is popped.
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stack = [];
  let node = root;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    k--;
    if (k === 0) return node.val;

    node = node.right;
  }

  return null;
};

module.exports = kthSmallest;
