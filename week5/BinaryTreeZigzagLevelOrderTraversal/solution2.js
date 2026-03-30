/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const result = [];

  function dfs(node, level) {
    if (!node) return;

    if (result.length === level) {
      result.push([]);
    }

    if (level % 2 === 0) {
      result[level].push(node.val);
    } else {
      result[level].unshift(node.val);
    }

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root, 0);
  return result;
};

module.exports = zigzagLevelOrder;