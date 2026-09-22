/**
 * Morris preorder traversal — avoids a recursion stack or explicit
 * stack/queue by temporarily threading each node's inorder predecessor's
 * .right pointer to itself, then removing the thread once used.
 *
 * Path-sum bookkeeping piggybacks on the traversal: each node's value is
 * folded into its children's values the moment it is first visited
 * (child.val += curr.val), so by the time a leaf is reached, leaf.val
 * already holds the full root-to-leaf sum — no separate running sum to
 * carry (or "undo" on backtrack) is needed.
 *
 * Gotcha: threading temporarily overwrites a leaf's .right pointer, so a
 * leaf that is also serving as someone's predecessor cannot be identified
 * by "curr.right === null" alone at the moment it's visited. A WeakSet
 * tracks which nodes currently have an active thread so leaf-detection and
 * value-propagation can tell a real right child from a synthetic one. This
 * makes the solution O(H) auxiliary space (at most one active thread per
 * ancestor level) rather than the strictly O(1) space pure Morris
 * traversal is normally prized for — still far below the O(N) a
 * stack/queue-based traversal needs.
 *
 * Trade-off shared with any in-place Morris variant: it mutates the input
 * tree's node values while running (restored back to original only for the
 * .right structure, not for .val).
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  const threaded = new Set(); // nodes whose .right is currently a synthetic thread

  let curr = root;
  let found = false;

  while (curr && !found) {
    if (curr.left === null) {
      const isRealRight = curr.right !== null && !threaded.has(curr);
      if (!isRealRight && curr.val === targetSum) {
        found = true;
      }
      if (isRealRight) {
        curr.right.val += curr.val;
      }
      curr = curr.right;
    } else {
      let pred = curr.left;
      while (pred.right !== null && pred.right !== curr) {
        pred = pred.right;
      }

      if (pred.right === null) {
        curr.left.val += curr.val;
        const isRealRight = curr.right !== null && !threaded.has(curr);
        if (isRealRight) {
          curr.right.val += curr.val;
        }
        pred.right = curr;
        threaded.add(pred);
        curr = curr.left;
      } else {
        pred.right = null;
        threaded.delete(pred);
        curr = curr.right;
      }
    }
  }

  // An early return (found === true) can leave threads from ancestors of
  // the matched leaf still active — unwind them so the tree's .right
  // structure isn't left corrupted for the caller.
  for (const node of threaded) {
    node.right = null;
  }

  return found;
};

module.exports = hasPathSum;
