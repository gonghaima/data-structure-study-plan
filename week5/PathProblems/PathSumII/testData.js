/**
 * Test data for Path Sum II
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: {
                root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
                targetSum: 22
            },
            expected: [
                [5, 4, 11, 2],
                [5, 8, 4, 5]
            ]
        },
        {
            description: 'Basic case from LeetCode example 2 - no matching path',
            input: {
                root: [1, 2, 3],
                targetSum: 5
            },
            expected: []
        },
        {
            description: 'Basic case from LeetCode example 3 - empty result',
            input: {
                root: [1, 2],
                targetSum: 0
            },
            expected: []
        }
    ],

    edgeCases: [
        {
            description: 'Empty tree',
            input: {
                root: [],
                targetSum: 0
            },
            expected: []
        },
        {
            description: 'Single node tree with matching sum',
            input: {
                root: [5],
                targetSum: 5
            },
            expected: [[5]]
        },
        {
            description: 'Single node tree with non-matching sum',
            input: {
                root: [1],
                targetSum: 2
            },
            expected: []
        },
        {
            description: 'Tree with negative values',
            input: {
                root: [-3, 9, -10, null, 5],
                targetSum: 11
            },
            expected: [[-3, 9, 5]]
        }
    ],

    performanceTests: [
        {
            description: 'Balanced tree with multiple matching paths',
            input: {
                root: [1, 2, 3, 4, 5, 6, 7],
                targetSum: 8
            },
            expected: [
                [1, 2, 5]
            ]
        },
        {
            description: 'Deep skewed tree with target sum at leaf',
            input: {
                root: [1, 2, null, 3, null, 4, null, 5],
                targetSum: 15
            },
            expected: [
                [1, 2, 3, 4, 5]
            ]
        }
    ],

    specialCases: [
        {
            description: 'Path sum equals zero',
            input: {
                root: [0],
                targetSum: 0
            },
            expected: [[0]]
        },
        {
            description: 'All negative path',
            input: {
                root: [-1, -2, -3],
                targetSum: -3
            },
            expected: [[-1, -2]]
        },
        {
            description: 'Multiple leaves share the same target sum',
            input: {
                root: [1, 1, 1, 1, 1, 1, 1],
                targetSum: 3
            },
            expected: [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1]
            ]
        }
    ]
};

module.exports = testData;
