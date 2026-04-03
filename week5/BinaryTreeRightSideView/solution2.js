/**
 * Solution 2: DFS Iterative (explicit stack)
 *
 * Same idea as the recursive DFS — visit right child before left,
 * record the first node seen at each depth — but uses an explicit
 * stack instead of the call stack.
 *
 * Time: O(n) — every node visited once
 * Space: O(h) — stack depth proportional to tree height
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];

  const result = [];
  // Each stack entry is [node, depth]
  const stack = [[root, 0]];

  while (stack.length) {
    const [node, depth] = stack.pop();

    if (depth === result.length) {
      result.push(node.val);
    }

    // Push left first so right is popped first
    if (node.left) stack.push([node.left, depth + 1]);
    if (node.right) stack.push([node.right, depth + 1]);
  }

  return result;
};

module.exports = rightSideView;
