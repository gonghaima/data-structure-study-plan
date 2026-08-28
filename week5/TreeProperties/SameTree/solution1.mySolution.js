/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const stack = [[p, q]];
  let isSame = true;
  while (stack.length && isSame) {
    const [pNode, qNode] = stack.pop();
    if (pNode && qNode) {
      if (pNode?.val !== qNode?.val) isSame = false;
      stack.push([pNode.left, qNode.left]);
      stack.push([pNode.right, qNode.right]);
    } else if (pNode || qNode) {
      isSame = false;
    }
  }
  return isSame;
};

module.exports = isSameTree;
