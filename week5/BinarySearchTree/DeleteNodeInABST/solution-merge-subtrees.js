/**
 * "Merge subtrees" technique: when the target node has two children, it is
 * never copied into or recursed on again. Instead it's discarded outright -
 * the left subtree is promoted to take its place, and the right subtree is
 * grafted onto the rightmost (maximum) node of that promoted left subtree.
 * This produces a valid BST with the same remaining values as the
 * value-copy approaches (solution.js, solution-predecessor.js), but a
 * different shape - it will not match testData.js fixtures for the three
 * cases that delete a node with two children. See complexity-analysis.md.
 *
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  }

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  }

  if (!root.left) return root.right;
  if (!root.right) return root.left;

  let rightmost = root.left;
  while (rightmost.right) rightmost = rightmost.right;
  rightmost.right = root.right;

  return root.left;
};

module.exports = deleteNode;
