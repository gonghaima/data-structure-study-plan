/**
 * Iterative Solution (One Stack) - O(n) time, O(h) space
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) return [];
    
    const result = [];
    const stack = [root];
    
    while (stack.length) {
        const node = stack.pop();
        result.unshift(node.val);
        
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    
    return result;
};

module.exports = postorderTraversal;
