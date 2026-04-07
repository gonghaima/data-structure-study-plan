/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    // TODO: Implement your solution here
    let result = [];

    function dfs(node) {
        if (!node) return;

        result.push(node.val); // Process the current node first

        // Recursively process all children
        for (let child of node.children) {
            dfs(child);
        }
    }

    dfs(root);
    return result;
};

module.exports = preorder;
