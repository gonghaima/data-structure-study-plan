/**
 * Test data for Binary Tree Postorder Traversal
 * Organized by test categories for better maintainability
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: { root: new TreeNode(1, null, new TreeNode(2, new TreeNode(3))) },
            expected: [3, 2, 1]
        },
        {
            description: 'Basic case from LeetCode example 4',
            input: { root: new TreeNode(1) },
            expected: [1]
        },
        {
            description: 'Complete binary tree',
            input: { root: new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3)) },
            expected: [4, 5, 2, 3, 1]
        }
    ],

    edgeCases: [
        {
            description: 'Empty tree',
            input: { root: null },
            expected: []
        },
        {
            description: 'Left skewed tree',
            input: { root: new TreeNode(1, new TreeNode(2, new TreeNode(3))) },
            expected: [3, 2, 1]
        },
        {
            description: 'Right skewed tree',
            input: { root: new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))) },
            expected: [3, 2, 1]
        }
    ],

    performanceTests: [
        {
            description: 'Large balanced tree',
            input: { root: new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7))) },
            expected: [4, 5, 2, 6, 7, 3, 1]
        }
    ],

    specialCases: [
        {
            description: 'Tree with negative values',
            input: { root: new TreeNode(-1, new TreeNode(-2), new TreeNode(-3)) },
            expected: [-2, -3, -1]
        },
        {
            description: 'Tree with duplicate values',
            input: { root: new TreeNode(1, new TreeNode(1), new TreeNode(1)) },
            expected: [1, 1, 1]
        }
    ]
};

module.exports = testData;
