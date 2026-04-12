/**
 * Iterative using a stack (reverse preorder trick)
 *
 * Preorder visits: root → children left-to-right
 * Postorder visits: children left-to-right → root
 *
 * So: do a modified preorder (root → children right-to-left),
 * collect into result, then reverse result.
 *
 * Time:  O(n)
 * Space: O(n)
 *
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  if (!root) return [];

  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    // Push children left-to-right so right child is popped first
    for (let child of node.children) {
      stack.push(child);
    }
  }

  return result.reverse();
};

module.exports = postorder;
