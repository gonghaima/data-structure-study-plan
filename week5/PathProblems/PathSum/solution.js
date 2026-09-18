/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;

  let found = false;
  const nodeVals = [root.left, root.right].filter(Boolean);
  let listNodes = [{ [root.val]: nodeVals }];

  while (listNodes.length && !found) {
    const currentNode = listNodes.shift();
    const sumSoFar = Number(Object.keys(currentNode)[0]);
    const childNodes = Object.values(currentNode)[0];

    for (let i = 0; i < childNodes.length && !found; i++) {
      const child = childNodes[i];
      const childSum = sumSoFar + child.val;
      const subNodes = [];
      if (child.left) {
        subNodes.push(child.left);
      }
      if (child.right) {
        subNodes.push(child.right);
      }
      if (subNodes.length)
        listNodes.push({ [childSum]: subNodes });
      else
        childSum === targetSum && (found = true);
    }
  }

  return found;
};

module.exports = hasPathSum;
