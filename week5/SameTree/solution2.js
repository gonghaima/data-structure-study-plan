/**
 * BFS - compare trees level by level using a queue
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const queue = [[p, q]];
  while (queue.length) {
    const [pNode, qNode] = queue.shift();
    if (!pNode && !qNode) continue;
    if (!pNode || !qNode || pNode.val !== qNode.val) return false;
    queue.push([pNode.left, qNode.left]);
    queue.push([pNode.right, qNode.right]);
  }
  return true;
};

module.exports = isSameTree;
