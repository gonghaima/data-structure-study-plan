/**
 * Iterative BST search using the same left/right decision as the recursive
 * version, but with an explicit loop instead of the call stack.
 *
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let node = root;

  while (node && node.val !== val) {
    node = val < node.val ? node.left : node.right;
  }

  return node || null;
};

module.exports = searchBST;
