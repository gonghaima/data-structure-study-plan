/**
 * DFS recursive — track depth to insert into correct result bucket.
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const result = [];

    function dfs(node, depth) {
        if (!node) return;
        if (result.length === depth) result.push([]);
        result[depth].push(node.val);
        for (const child of node.children) {
            dfs(child, depth + 1);
        }
    }

    dfs(root, 0);
    return result;
};

module.exports = levelOrder;
