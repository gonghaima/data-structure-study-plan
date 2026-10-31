/**
 * Flattens the BST into a sorted array of nodes via in-order traversal
 * (valid since in-order visits a BST in ascending value order), then runs
 * classic binary search over that array to find the matching node. A
 * different technique from directly descending the tree: it trades extra
 * O(N) space for a traversal + array step up front.
 *
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  const nodes = [];

  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    nodes.push(node);
    inorder(node.right);
  }

  inorder(root);

  let lo = 0;
  let hi = nodes.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nodes[mid].val === val) return nodes[mid];
    if (nodes[mid].val < val) lo = mid + 1;
    else hi = mid - 1;
  }

  return null;
};

module.exports = searchBST;
