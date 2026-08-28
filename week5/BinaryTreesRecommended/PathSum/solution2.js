/**
 * Iterative DFS Solution - O(n) time, O(n) space
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    
    const stack = [[root, targetSum]];
    
    while (stack.length) {
        const [node, sum] = stack.pop();
        
        if (!node.left && !node.right && node.val === sum) {
            return true;
        }
        
        if (node.right) {
            stack.push([node.right, sum - node.val]);
        }
        
        if (node.left) {
            stack.push([node.left, sum - node.val]);
        }
    }
    
    return false;
};

module.exports = hasPathSum;