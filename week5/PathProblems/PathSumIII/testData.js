/**
 * Test data for Path Sum III
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: {
                root: [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1],
                targetSum: 8
            },
            expected: 3
        },
        {
            description: 'Basic case from LeetCode example 2',
            input: {
                root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
                targetSum: 22
            },
            expected: 3
        }
    ],

    edgeCases: [
        {
            description: 'Empty tree',
            input: {
                root: [],
                targetSum: 0
            },
            expected: 0
        },
        {
            description: 'Single node tree with matching sum',
            input: {
                root: [5],
                targetSum: 5
            },
            expected: 1
        },
        {
            description: 'Single node tree with non-matching sum',
            input: {
                root: [1],
                targetSum: 2
            },
            expected: 0
        }
    ],

    performanceTests: [
        {
            description: 'Balanced tree with a path that does not start at root or end at a leaf',
            input: {
                root: [1, 2, 3, 4, 5, 6, 7],
                targetSum: 11
            },
            expected: 1
        },
        {
            description: 'Balanced tree with no matching path',
            input: {
                root: [1, 2, 3, 4, 5, 6, 7],
                targetSum: 100
            },
            expected: 0
        }
    ],

    specialCases: [
        {
            description: 'Tree with zero values and multiple matching paths',
            input: {
                root: [0, 1, 1],
                targetSum: 1
            },
            expected: 4
        },
        {
            description: 'Tree with negative values',
            input: {
                root: [1, -2, -3, 1, 3, -2, null, -1],
                targetSum: -1
            },
            expected: 4
        },
        {
            description: 'All-zero tree with many zero-sum paths',
            input: {
                root: [0, 0, 0],
                targetSum: 0
            },
            expected: 5
        }
    ]
};

module.exports = testData;
