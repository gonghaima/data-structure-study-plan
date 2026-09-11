/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];
  if (!root) return result;

  const parents = new Map();
  const leaves = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    if (!node.left && !node.right) {
      leaves.push(node);
    } else {
      if (node.left) {
        parents.set(node.left, node);
        queue.push(node.left);
      }
      if (node.right) {
        parents.set(node.right, node);
        queue.push(node.right);
      }
    }
  }

  for (const leaf of leaves) {
    const values = [];
    let node = leaf;
    while (node) {
      values.push(node.val);
      node = parents.get(node);
    }
    result.push(values.reverse().join('->'));
  }

  return result;
};

module.exports = binaryTreePaths;
