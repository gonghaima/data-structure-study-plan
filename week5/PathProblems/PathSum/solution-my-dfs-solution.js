/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // TODO: Implement your solution here
  let found = false;
  function find(node, sum) {
    if (
      (node?.val || node?.val === 0) &&
      !node?.left &&
      !node?.right &&
      node.val === sum
    ) {
      found = true;
      return;
    } else if (node?.val && !node?.left && !node?.right && node.val !== sum) {
      return;
    }

    if (node?.left && !found) {
      find(node.left, sum - node.val);
    }
    if (node?.right && !found) {
      find(node.right, sum - node.val);
    }

    return;
  }
  find(root, targetSum);
  return found;
};

module.exports = hasPathSum;
