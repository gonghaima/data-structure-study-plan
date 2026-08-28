/**
 * @param {TreeNode} root
 * @return {number}
 */

// Binary search over the last level's node positions
// O(log^2 n) time, O(1) extra space (iterative, no recursion)
// Key insight: a complete tree of height h has exactly 2^(h-1) - 1
// nodes in its fully-filled upper levels. The last level holds between
// 1 and 2^(h-1) nodes, filled left to right, so we binary search for
// the rightmost occupied position in that level. Each "does this
// position exist" check walks a single root-to-leaf path (O(h)),
// interpreting the position's binary digits as left(0)/right(1) turns.

var countNodes = function (root) {
    if (!root) return 0;

    const height = getLeftHeight(root); // number of levels, root's level counts as 1
    if (height === 1) return 1;

    const lastLevelWidth = Math.pow(2, height - 1);
    const upperLevelsCount = lastLevelWidth - 1;

    let lo = 0;
    let hi = lastLevelWidth - 1;

    while (lo < hi) {
        const mid = Math.ceil((lo + hi) / 2);
        if (existsAtPosition(root, height, mid)) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }

    return upperLevelsCount + lo + 1;
};

function getLeftHeight(node) {
    let height = 0;
    while (node) {
        height++;
        node = node.left;
    }
    return height;
}

function existsAtPosition(root, height, position) {
    let node = root;
    // path has (height - 1) bits: 0 = go left, 1 = go right
    for (let bit = height - 2; bit >= 0; bit--) {
        const goRight = (position >> bit) & 1;
        node = goRight ? node.right : node.left;
        if (!node) return false;
    }
    return true;
}

module.exports = countNodes;
