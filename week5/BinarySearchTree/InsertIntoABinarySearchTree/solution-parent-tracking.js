/**
 * Iterative insertion using a separate `parent` pointer: walk `curr` all
 * the way down to null (tracking the last non-null node visited), then
 * decide once, after the loop ends, which side of `parent` the new node
 * belongs on. A commonly-seen alternate structure to checking each child
 * for null before advancing into it.
 *
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  const newNode = { val, left: null, right: null };
  if (!root) return newNode;

  let parent = null;
  let curr = root;

  while (curr) {
    parent = curr;
    curr = val < curr.val ? curr.left : curr.right;
  }

  if (val < parent.val) parent.left = newNode;
  else parent.right = newNode;

  return root;
};

module.exports = insertIntoBST;
