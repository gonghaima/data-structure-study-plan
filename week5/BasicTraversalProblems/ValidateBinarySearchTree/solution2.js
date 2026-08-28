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

// Iterative in-order traversal approach
// O(n) time, O(h) space
// Key insight: In-order gives sorted sequence; if any value is not strictly increasing, it's invalid

var isValidBST = function(root) {
    if (!root) return true;
    
    const stack = [];
    let current = root;
    let prev = -Infinity;
    
    while (current || stack.length > 0) {
        // Go to the leftmost node
        while (current) {
            stack.push(current);
            current = current.left;
        }
        
        // Current must be null, pop from stack
        current = stack.pop();
        
        // Check if current node violates BST property
        if (current.val <= prev) {
            return false;
        }
        prev = current.val;
        
        // Visit right subtree
        current = current.right;
    }
    
    return true;
};

module.exports = isValidBST;
