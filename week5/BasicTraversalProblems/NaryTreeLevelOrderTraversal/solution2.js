/**
 * BFS with two arrays (current level / next level) — avoids queue.shift() O(n) cost.
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    const result = [];
    let currentLevel = [root];

    while (currentLevel.length > 0) {
        const vals = [];
        const nextLevel = [];

        for (const node of currentLevel) {
            vals.push(node.val);
            for (const child of node.children) {
                nextLevel.push(child);
            }
        }

        result.push(vals);
        currentLevel = nextLevel;
    }

    return result;
};

module.exports = levelOrder;
