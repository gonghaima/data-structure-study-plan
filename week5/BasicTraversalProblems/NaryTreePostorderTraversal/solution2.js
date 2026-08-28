/**
 * Iterative using explicit state tracking (no reverse trick)
 *
 * Each stack entry is [node, childIndex]. We advance childIndex
 * to process children one at a time, then push the node's value
 * once all children are done — true iterative postorder.
 *
 * Time:  O(n)
 * Space: O(h) where h is tree height
 *
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  if (!root) return [];

  const result = [];
  const stack = [[root, 0]]; // [node, nextChildIndex]

  while (stack.length) {
    const top = stack[stack.length - 1];
    const [node, i] = top;

    if (i < node.children.length) {
      top[1]++; // advance child pointer before pushing
      stack.push([node.children[i], 0]);
    } else {
      result.push(node.val);
      stack.pop();
    }
  }

  return result;
};

module.exports = postorder;
