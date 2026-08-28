/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  // TODO: Implement your solution here
  if (!root) return [];
  const result = [];
  let queue = [root];
  while (queue.length) {
    let next = [];
    if (queue.length) result.push(queue[queue.length - 1]?.val);
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].left) next.push(queue[i].left);
      if (queue[i].right) next.push(queue[i].right);
    }
    queue = next;
  }
  return result;
};

module.exports = rightSideView;
