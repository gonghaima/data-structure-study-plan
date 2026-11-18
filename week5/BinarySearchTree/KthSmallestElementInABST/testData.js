/**
 * Test data for Kth Smallest Element in a BST
 * Organized by test categories for better maintainability
 *
 * `input.tree` is a level-order array (null marks a missing child).
 * `expected` is the kth smallest (1-indexed) value in the tree.
 */

const testData = {
    basicFunctionality: [
        {
            description: 'LeetCode example 1 - smallest value',
            input: { tree: [3, 1, 4, null, 2], k: 1 },
            expected: 1
        },
        {
            description: 'LeetCode example 2 - value in the middle of the sorted order',
            input: { tree: [5, 3, 6, 2, 4, null, null, 1], k: 3 },
            expected: 3
        }
    ],

    edgeCases: [
        {
            description: 'single node tree, k = 1',
            input: { tree: [1], k: 1 },
            expected: 1
        },
        {
            description: 'k equals the number of nodes - largest value',
            input: { tree: [3, 1, 4, null, 2], k: 4 },
            expected: 4
        },
        {
            description: 'k = 1 on a different tree shape',
            input: { tree: [5, 3, 6, 2, 4, null, null, 1], k: 1 },
            expected: 1
        }
    ],

    performanceTests: [
        {
            description: 'larger tree, k near the middle',
            input: {
                tree: [10, 5, 15, 3, 7, 12, 18, 1, 4, 6, 8, 11, 13, 16, 20],
                k: 8
            },
            expected: 10
        },
        {
            description: 'larger tree, k equals the number of nodes - largest value',
            input: {
                tree: [10, 5, 15, 3, 7, 12, 18, 1, 4, 6, 8, 11, 13, 16, 20],
                k: 15
            },
            expected: 20
        }
    ],

    specialCases: [
        {
            description: 'unbalanced tree, k lands inside the left subtree',
            input: {
                tree: [8, 3, 10, 1, 6, 9, 14, null, 2, 4, 7, null, null, 13],
                k: 6
            },
            expected: 7
        },
        {
            description: 'unbalanced tree, k = 1 - smallest value',
            input: {
                tree: [8, 3, 10, 1, 6, 9, 14, null, 2, 4, 7, null, null, 13],
                k: 1
            },
            expected: 1
        },
        {
            description: 'unbalanced tree, k equals the number of nodes - largest value',
            input: {
                tree: [8, 3, 10, 1, 6, 9, 14, null, 2, 4, 7, null, null, 13],
                k: 11
            },
            expected: 14
        }
    ]
};

module.exports = testData;
