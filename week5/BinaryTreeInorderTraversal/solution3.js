// Approach 4: Iterative with Explicit Stack Operations
// Time: O(n), Space: O(n)
function inorderTraversal(root) {
    if (!root) return [];
    
    const result = [];
    const stack = [root];
    const visited = new Set();
    
    while (stack.length) {
        const node = stack[stack.length - 1];
        
        if (!node.left || visited.has(node.left)) {
            result.push(node.val);
            stack.pop();
            visited.add(node);
            if (node.right) stack.push(node.right);
        } else {
            stack.push(node.left);
        }
    }
    
    return result;
}

module.exports = inorderTraversal;