// Approach 1: Recursive DFS
// Time: O(n), Space: O(n)
function inorderTraversal(root) {
    const result = [];
    
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
    
    dfs(root);
    return result;
}

module.exports = inorderTraversal;