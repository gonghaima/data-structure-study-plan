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

// Iterative DFS with min/max bounds
// O(n) time, O(h) space
// Key insight: Store (node, min, max) tuples in stack for bounds checking

var isValidBST = function(root) {
    if (!root) return true;
    
    const stack = [[root, -Infinity, Infinity]];
    
    while (stack.length > 0) {
        const [node, min, max] = stack.pop();
        
        if (!node) continue;
        
        // Check if current node violates BST property
        if (node.val <= min || node.val >= max) {
            return false;
        }
        
        // Push children with updated bounds
        // Left child: max becomes current node's value
        if (node.left) {
            stack.push([node.left, min, node.val]);
        }
        
        // Right child: min becomes current node's value
        if (node.right) {
            stack.push([node.right, node.val, max]);
        }
    }
    
    return true;
};

module.exports = isValidBST;
