/**
 * Iterative post-order DFS with stack
 * Uses a Map to store computed heights. Processes each node after its children.
 * Avoids recursion stack overflow on very deep trees.
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  const heightMap = new Map();
  const stack = [[root, false]];

  while (stack.length > 0) {
    const [node, processed] = stack.pop();
    if (!node) continue;

    if (processed) {
      const left = heightMap.get(node.left) ?? 0;
      const right = heightMap.get(node.right) ?? 0;
      if (Math.abs(left - right) > 1) return false;
      heightMap.set(node, 1 + Math.max(left, right));
    } else {
      stack.push([node, true]);
      stack.push([node.right, false]);
      stack.push([node.left, false]);
    }
  }

  return true;
};

module.exports = isBalanced;
