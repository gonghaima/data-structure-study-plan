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
  let queue = [root];
  while (queue.length) {
    let next = [];
    for (let i = 0; i < queue.length; i++) {
      queue[i] ? result.push(queue[i].val) : result.push(null);

      if (queue[i] === null) {
        result.push(null);
      } else {
        if (queue[i].left) next.push(queue[i].left);
        else next.push(null);

        if (queue[i].right) next.push(queue[i].right);
        else next.push(null);
      }
    }
    queue = next;
  }
  return result;
};

module.exports = zigzagLevelOrder;
