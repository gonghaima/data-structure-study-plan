// Solution 3: Path-based Approach
var lowestCommonAncestor = function(root, p, q) {
    const pathP = [];
    const pathQ = [];
    
    findPath(root, p, pathP);
    findPath(root, q, pathQ);
    
    let lca = null;
    const minLen = Math.min(pathP.length, pathQ.length);
    
    for (let i = 0; i < minLen; i++) {
        if (pathP[i] === pathQ[i]) {
            lca = pathP[i];
        } else {
            break;
        }
    }
    
    return lca;
};

function findPath(root, target, path) {
    if (!root) return false;
    
    path.push(root);
    
    if (root === target) return true;
    
    if (findPath(root.left, target, path) || findPath(root.right, target, path)) {
        return true;
    }
    
    path.pop();
    return false;
}

module.exports = lowestCommonAncestor;