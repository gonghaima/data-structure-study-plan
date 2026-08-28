/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let max = 0;

    function depth(node) {
        if (!node) return 0;
        const left = depth(node.left);
        const right = depth(node.right);
        max = Math.max(max, left + right);
        return 1 + Math.max(left, right);
    }

    depth(root);
    return max;
};

module.exports = diameterOfBinaryTree;
