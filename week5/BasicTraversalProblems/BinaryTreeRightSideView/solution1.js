/**
 * Solution 1: DFS Recursive (preorder, right before left)
 *
 * Visit nodes right-first. The first node we encounter at each depth
 * is the rightmost visible node, so we only record it once per level.
 *
 * Time: O(n) — every node visited once
 * Space: O(h) — recursion stack, h = tree height
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const result = [];

  function dfs(node, depth) {
    if (!node) return;
    if (depth === result.length) {
      result.push(node.val);
    }
    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  }

  dfs(root, 0);
  return result;
};

module.exports = rightSideView;
