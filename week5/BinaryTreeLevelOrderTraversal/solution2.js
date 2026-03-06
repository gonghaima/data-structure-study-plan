/**
 * DFS Recursive Solution - O(n) time, O(h) space where h is height
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    
    function dfs(node, level) {
        if (!node) return;
        
        if (result.length === level) {
            result.push([]);
        }
        
        result[level].push(node.val);
        
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    
    dfs(root, 0);
    return result;
};

module.exports = levelOrder;