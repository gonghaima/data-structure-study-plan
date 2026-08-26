/**
 * @param {TreeNode} root
 * @return {number}
 */

// Height-comparison recursion (exploits the complete-tree property)
// O(log^2 n) time, O(log n) space
// Key insight: for any node, compare the height of its leftmost path
// against its rightmost path.
//   - If they're equal, the subtree rooted here is a PERFECT binary
//     tree, so its node count is 2^height - 1 — no need to recurse further.
//   - If they differ, recurse into both children; one side will bottom
//     out in O(1) and the other keeps the recursion going, giving
//     O(log n) recursive calls, each doing O(log n) height work.

var countNodes = function (root) {
    if (!root) return 0;

    const leftHeight = getLeftHeight(root);
    const rightHeight = getRightHeight(root);

    if (leftHeight === rightHeight) {
        return Math.pow(2, leftHeight) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
};

function getLeftHeight(node) {
    let height = 0;
    while (node) {
        height++;
        node = node.left;
    }
    return height;
}

function getRightHeight(node) {
    let height = 0;
    while (node) {
        height++;
        node = node.right;
    }
    return height;
}

module.exports = countNodes;
