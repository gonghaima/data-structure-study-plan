/**
 * Augmented-BST / rank-query technique: one DFS pass computes and caches
 * every node's subtree size, then a second pass descends directly to the
 * kth smallest using those sizes - no in-order traversal at all. At each
 * node, if k equals (left subtree size + 1), this node is the answer; if
 * k is within the left subtree's size, recurse left; otherwise subtract
 * the left subtree and the current node from k and recurse right.
 *
 * This mirrors the problem's own follow-up ("if the BST is modified often
 * and you need to find the kth smallest frequently, how would you
 * optimize?") - a real augmented BST keeps each node's subtree size
 * updated incrementally on insert/delete, making every query O(H) with no
 * O(N) traversal needed at query time. Here the sizes are computed fresh
 * each call instead, so the first call is still O(N).
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const size = new Map();

  function computeSize(node) {
    if (!node) return 0;
    const total = 1 + computeSize(node.left) + computeSize(node.right);
    size.set(node, total);
    return total;
  }

  computeSize(root);

  let node = root;
  while (node) {
    const leftSize = node.left ? size.get(node.left) : 0;

    if (k === leftSize + 1) return node.val;
    if (k <= leftSize) {
      node = node.left;
    } else {
      k -= leftSize + 1;
      node = node.right;
    }
  }

  return null;
};

module.exports = kthSmallest;
