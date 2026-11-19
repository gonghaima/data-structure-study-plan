/**
 * In-order traversal visits a BST's nodes in ascending order, so the kth
 * value encountered during that traversal is the kth smallest. A counter
 * is decremented at each visit and the traversal stops as soon as it
 * reaches the target, instead of collecting every value first.
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count = k;
  let result = null;

  function inorder(node) {
    if (!node || result !== null) return;

    inorder(node.left);

    if (result !== null) return;
    count--;
    if (count === 0) {
      result = node.val;
      return;
    }

    inorder(node.right);
  }

  inorder(root);
  return result;
};

module.exports = kthSmallest;
