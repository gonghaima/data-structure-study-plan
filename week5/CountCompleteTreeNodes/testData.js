/**
 * Test data for Count Complete Tree Nodes
 * Organized by test categories for better maintainability
 */

// TreeNode definition for testing
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

/**
 * Builds a complete binary tree with n nodes, filled level by level
 * (left to right), using 1-indexed node values 1..n.
 */
function buildCompleteTree(n) {
    if (n === 0) return null;
    const nodes = [];
    for (let i = 1; i <= n; i++) {
        nodes.push(new TreeNode(i));
    }
    for (let i = 0; i < n; i++) {
        const leftIndex = 2 * i + 1;
        const rightIndex = 2 * i + 2;
        if (leftIndex < n) nodes[i].left = nodes[leftIndex];
        if (rightIndex < n) nodes[i].right = nodes[rightIndex];
    }
    return nodes[0];
}

const testData = {
    basicFunctionality: [
        {
            description: 'Basic complete tree from LeetCode example 1',
            input: new TreeNode(1,
                new TreeNode(2, new TreeNode(4), new TreeNode(5)),
                new TreeNode(3, new TreeNode(6))),
            expected: 6
        },
        {
            description: 'Empty tree from LeetCode example 2',
            input: null,
            expected: 0
        },
        {
            description: 'Single node tree from LeetCode example 3',
            input: new TreeNode(1),
            expected: 1
        }
    ],

    edgeCases: [
        {
            description: 'Two node complete tree',
            input: new TreeNode(1, new TreeNode(2)),
            expected: 2
        },
        {
            description: 'Three node complete tree (perfect, depth 1)',
            input: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            expected: 3
        },
        {
            description: 'Last level with only one extra node on the left',
            input: new TreeNode(1,
                new TreeNode(2, new TreeNode(4)),
                new TreeNode(3)),
            expected: 4
        }
    ],

    performanceTests: [
        {
            description: 'Large perfect binary tree (1023 nodes, depth 9)',
            input: buildCompleteTree(1023),
            expected: 1023
        },
        {
            description: 'Large complete but not perfect tree (1000 nodes)',
            input: buildCompleteTree(1000),
            expected: 1000
        }
    ],

    specialCases: [
        {
            description: 'Perfect binary tree with 7 nodes',
            input: buildCompleteTree(7),
            expected: 7
        },
        {
            description: 'Complete tree with 15 nodes (perfect, depth 3)',
            input: buildCompleteTree(15),
            expected: 15
        }
    ]
};

module.exports = testData;
