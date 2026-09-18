/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // TODO: Implement your solution here
  let found = false;
  let nodeVals = [];
  root?.left && nodeVals.push(root.left);
  root?.right && nodeVals.push(root.right);
  let listNodes = [];
  if (nodeVals.length) {
    listNodes = [{ [root.val]: nodeVals }];
  }
  while (listNodes.length && !found) {
    nextNodeList = [];
    currentNode = listNodes.shift();
    childNodes = currentNode?.values?.[0] || [];
    for (let i = 0; i < childNodes && !found; i++) {
      const subNodes = [];
      if (childNodes?.left) {
        subNodes.push(childNodes?.left);
      }
      if (childNodes?.right) {
        subNodes.push(childNodes?.right);
      }
      if (subNodes.length)
        listNodes.push({
          [childNodes?.val + Object.keys(childNodes)[0]]: subNodes,
        });
      else
        childNodes?.val + Object.keys(childNodes)[0] === targetSum &&
          (found = true);
    }
  }

  return found;
};

module.exports = hasPathSum;
