/**
 * Test data for Search in a Binary Search Tree
 * Organized by test categories for better maintainability
 *
 * `input.tree` is a level-order array (null marks a missing child).
 * `expected` is the found subtree in nested-array form [val, left, right]
 * (recursively, with null for missing children), or null if not found.
 */

const testData = {
    basicFunctionality: [
        {
            description: 'LeetCode example 1 - value found with both children',
            input: { tree: [4, 2, 7, 1, 3], val: 2 },
            expected: [2, [1, null, null], [3, null, null]]
        },
        {
            description: 'LeetCode example 2 - value not found',
            input: { tree: [4, 2, 7, 1, 3], val: 5 },
            expected: null
        }
    ],

    edgeCases: [
        {
            description: 'single node tree, value matches the root',
            input: { tree: [1], val: 1 },
            expected: [1, null, null]
        },
        {
            description: 'single node tree, value does not match the root',
            input: { tree: [1], val: 2 },
            expected: null
        },
        {
            description: 'search value equals the root, returning the whole tree',
            input: { tree: [4, 2, 7, 1, 3, 6, 8], val: 4 },
            expected: [
                4,
                [2, [1, null, null], [3, null, null]],
                [7, [6, null, null], [8, null, null]]
            ]
        }
    ],

    performanceTests: [
        {
            description: 'deeper skewed-left tree, value found several levels down',
            input: { tree: [5, 3, 8, 1, 4, 7, 9, null, 2], val: 2 },
            expected: [2, null, null]
        },
        {
            description: 'larger balanced tree, value found with a non-trivial subtree',
            input: {
                tree: [10, 5, 15, 3, 7, 12, 18, 1, 4, 6, 8, 11, 13, 16, 20],
                val: 15
            },
            expected: [
                15,
                [12, [11, null, null], [13, null, null]],
                [18, [16, null, null], [20, null, null]]
            ]
        }
    ],

    specialCases: [
        {
            description: 'value found at a leaf node',
            input: { tree: [4, 2, 7, 1, 3, 6, 8], val: 8 },
            expected: [8, null, null]
        },
        {
            description: 'value smaller than every node - search runs off the left edge',
            input: { tree: [8, 4, 12, 2, 6, 10, 14], val: 1 },
            expected: null
        },
        {
            description: 'value found by repeatedly following left children',
            input: { tree: [8, 4, 12, 2, 6, 10, 14, 1, 3], val: 1 },
            expected: [1, null, null]
        }
    ]
};

module.exports = testData;
