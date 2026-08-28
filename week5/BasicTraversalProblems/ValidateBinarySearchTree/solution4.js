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

// DFS approach with min/max bounds
// Most efficient: O(n) time, O(h) space
// Key insight: Each node must fall within a valid range based on ancestors

var isValidBST = function(root) {
    const helper = (node, min, max) => {
        if (!node) return true;
        
        // Check if current node violates BST property
        if (node.val <= min || node.val >= max) {
            return false;
        }
        
        // Left subtree: all values must be < current node
        // Right subtree: all values must be > current node
        return helper(node.left, min, node.val) && helper(node.right, node.val, max);
    };
    
    return helper(root, -Infinity, Infinity);
};

module.exports = isValidBST;