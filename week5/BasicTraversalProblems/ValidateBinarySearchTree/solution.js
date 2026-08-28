/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // TODO: Implement your solution here
    if (!root) return true;
    if (root.left && root.left.val >= root.val) return false;
    if (root.right && root.right.val <= root.val) return false;
    return isValidBST(root.left) && isValidBST(root.right);
};

module.exports = isValidBST;