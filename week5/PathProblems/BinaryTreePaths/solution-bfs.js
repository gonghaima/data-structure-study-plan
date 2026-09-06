/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];
  const currentNodes = [];
  if (root.left) currentNodes.push(root.left);
  if (root.right) currentNodes.push(root.right);

  const checkQueue = [{ [String(root.val)]: currentNodes }];
  for (let i = 0; i < checkQueue.length; i++) {
    const currentItem = checkQueue[i];
    const key = Object.keys(currentItem)[0];
    const val = currentItem[key];
    if (val.length === 0) {
      result.push(key);
      continue;
    }
    for (let j = 0; j < val.length; j++) {
      const item = val[j];
      const curKey = key + '->' + item.val;
      const curVal = [];
      if (item.left) curVal.push(item.left);
      if (item.right) curVal.push(item.right);
      checkQueue.push({ [curKey]: curVal });
    }
  }

  return result;
};

module.exports = binaryTreePaths;
