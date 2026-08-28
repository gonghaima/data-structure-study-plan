/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// Recursive with helper function

var preorderTraversal = function(root) {
    const result = [];
    
    function traverse(node) {
        if (!node) return;
        
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    
    traverse(root);
    return result;
};

module.exports = preorderTraversal;