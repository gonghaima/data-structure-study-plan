/**
 * Morris in-order traversal: achieves O(1) extra space by temporarily
 * threading a node's in-order predecessor's right pointer back to it,
 * instead of using a stack or recursion. A `threaded` set tracks which
 * nodes currently have such a thread active, so a genuine right child can
 * be told apart from a synthetic one, and any threads still active on an
 * early return (once the kth node is found) are unwound before returning,
 * leaving the input tree exactly as it was.
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const threaded = new Set();
  let curr = root;
  let count = k;
  let result = null;

  while (curr) {
    if (curr.left === null) {
      count--;
      if (count === 0) {
        result = curr.val;
        break;
      }
      curr = curr.right;
    } else {
      let pred = curr.left;
      while (pred.right !== null && pred.right !== curr) pred = pred.right;

      if (pred.right === null) {
        pred.right = curr;
        threaded.add(pred);
        curr = curr.left;
      } else {
        pred.right = null;
        threaded.delete(pred);
        count--;
        if (count === 0) {
          result = curr.val;
          break;
        }
        curr = curr.right;
      }
    }
  }

  for (const node of threaded) node.right = null;

  return result;
};

module.exports = kthSmallest;
