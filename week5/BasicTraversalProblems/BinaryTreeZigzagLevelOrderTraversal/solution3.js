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
  if (!root) return [];

  const result = [];
  let stack1 = [root]; // for left to right
  let stack2 = []; // for right to left
  let level = 0;

  while (stack1.length > 0 || stack2.length > 0) {
    const currentLevel = [];

    if (level % 2 === 0) {
      while (stack1.length > 0) {
        const node = stack1.pop();
        currentLevel.push(node.val);

        // For next level (right to left), push right first then left
        if (node.left) stack2.push(node.left);
        if (node.right) stack2.push(node.right);
      }
    } else {
      while (stack2.length > 0) {
        const node = stack2.pop();
        currentLevel.push(node.val);

        // For next level (left to right), push left first then right
        if (node.right) stack1.push(node.right);
        if (node.left) stack1.push(node.left);
      }
    }

    result.push(currentLevel);
    level++;
  }

  return result;
};

module.exports = zigzagLevelOrder;