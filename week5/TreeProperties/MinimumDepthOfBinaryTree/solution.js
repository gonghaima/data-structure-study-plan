/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  // TODO: Implement your solution here
  let min = 0;
  if (!root) {
    return min;
  }
  let queue = [root];
  while (queue.length > 0) {
    let newQuerue = [];
    min++;
    let size = queue.length;
    for (let i = 0; i < queue.length; i++) {
      const element = queue[i];
      if (!element.left && !element.right) {
        return min;
      }
      if (element.left) {
        newQuerue.push(element.left);
      }
      if (element.right) {
        newQuerue.push(element.right);
      }
    }
    queue = newQuerue;
  }
};

module.exports = minDepth;
