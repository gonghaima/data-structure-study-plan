/**
 * Morris Traversal - O(n) time, O(1) space
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const result = [];
  let dummy = { left: root, right: null, val: null };
  let curr = dummy;

  while (curr) {
    if (!curr.left) {
      curr = curr.right;
    } else {
      let pred = curr.left;
      while (pred.right && pred.right !== curr) {
        pred = pred.right;
      }

      if (!pred.right) {
        pred.right = curr;
        curr = curr.left;
      } else {
        pred.right = null;
        reverseAddNodes(curr.left, pred, result);
        curr = curr.right;
      }
    }
  }

  return result;
};

function reverseAddNodes(from, to, result) {
  reverse(from, to);
  let node = to;
  while (true) {
    result.push(node.val);
    if (node === from) break;
    node = node.right;
  }
  reverse(to, from);
}

function reverse(from, to) {
  if (from === to) return;
  let prev = from;
  let curr = from.right;
  while (prev !== to) {
    let next = curr.right;
    curr.right = prev;
    prev = curr;
    curr = next;
  }
}

module.exports = postorderTraversal;
