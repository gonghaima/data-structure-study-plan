/**
 * Test data for Binary Tree Level Order Traversal
 * Organized by test categories for better maintainability
 */

// Helper function to create binary tree nodes
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: { root: new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))) },
            expected: [[3], [9, 20], [15, 7]]
        },
        {
            description: 'Single node tree',
            input: { root: new TreeNode(1) },
            expected: [[1]]
        },
        {
            description: 'Empty tree',
            input: { root: null },
            expected: []
        }
    ],

    edgeCases: [
        {
            description: 'Left skewed tree',
            input: { root: new TreeNode(1, new TreeNode(2, new TreeNode(3))) },
            expected: [[1], [2], [3]]
        },
        {
            description: 'Right skewed tree',
            input: { root: new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))) },
            expected: [[1], [2], [3]]
        },
        {
            description: 'Complete binary tree',
            input: { root: new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7))) },
            expected: [[1], [2, 3], [4, 5, 6, 7]]
        }
    ],

    performanceTests: [
        {
            description: 'Large balanced tree',
            input: { root: new TreeNode(1, new TreeNode(2), new TreeNode(3)) },
            expected: [[1], [2, 3]]
        }
    ],

    specialCases: [
        {
            description: 'Tree with negative values',
            input: { root: new TreeNode(-10, new TreeNode(-5), new TreeNode(5)) },
            expected: [[-10], [-5, 5]]
        },
        {
            description: 'Tree with duplicate values',
            input: { root: new TreeNode(1, new TreeNode(1), new TreeNode(1)) },
            expected: [[1], [1, 1]]
        }
    ]
};

module.exports = testData;