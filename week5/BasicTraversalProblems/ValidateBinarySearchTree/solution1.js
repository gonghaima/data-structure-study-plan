/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// In-order traversal approach
// O(n) time, O(h) space
// Key insight: In-order traversal of a valid BST produces sorted values

var isValidBST = function(root) {
    let prev = -Infinity;
    let isValid = true;
    
    const inOrder = (node) => {
        if (!node || !isValid) return;
        
        // Visit left subtree
        inOrder(node.left);
        
        // Check current node
        if (node.val <= prev) {
            isValid = false;
            return;
        }
        prev = node.val;
        
        // Visit right subtree
        inOrder(node.right);
    };
    
    inOrder(root);
    return isValid;
};

module.exports = isValidBST;
