/**
 * Functional O(n) approach: return [height, diameter] from each recursive call.
 * No mutation or closure variable — all state flows through return values.
 *
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    return dfs(root)[1];
};

function dfs(node) {
    if (!node) return [0, 0];

    const [leftH, leftD] = dfs(node.left);
    const [rightH, rightD] = dfs(node.right);

    const height = 1 + Math.max(leftH, rightH);
    const diameter = Math.max(leftH + rightH, leftD, rightD);

    return [height, diameter];
}

module.exports = diameterOfBinaryTree;
