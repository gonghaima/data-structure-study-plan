// Solution 4: Helper Function with Status
var lowestCommonAncestor = function(root, p, q) {
    const result = helper(root, p, q);
    return result.lca;
};

function helper(node, p, q) {
    if (!node) return { foundP: false, foundQ: false, lca: null };
    
    const left = helper(node.left, p, q);
    if (left.lca) return left;
    
    const right = helper(node.right, p, q);
    if (right.lca) return right;
    
    const foundP = left.foundP || right.foundP || node === p;
    const foundQ = left.foundQ || right.foundQ || node === q;
    
    return {
        foundP,
        foundQ,
        lca: foundP && foundQ ? node : null
    };
}

module.exports = lowestCommonAncestor;