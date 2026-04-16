/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // TODO: Implement your solution here
    const result = [];
    let queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (!node) continue;

            currentLevel.push(node.val);

            // Add all children to the queue
            for (const child of node.children) {
                queue.push(child);
            }
        }

        if (currentLevel.length > 0) {
            result.push(currentLevel);
        }
    }

    return result;
};

module.exports = levelOrder;
