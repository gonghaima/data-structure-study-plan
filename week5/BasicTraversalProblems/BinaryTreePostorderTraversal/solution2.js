/**
 * Iterative Solution (Two Stacks) - O(n) time, O(n) space
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) return [];
    
    const stack1 = [root];
    const stack2 = [];
    
    while (stack1.length) {
        const node = stack1.pop();
        stack2.push(node);
        
        if (node.left) stack1.push(node.left);
        if (node.right) stack1.push(node.right);
    }
    
    const result = [];
    while (stack2.length) {
        result.push(stack2.pop().val);
    }
    
    return result;
};

module.exports = postorderTraversal;
