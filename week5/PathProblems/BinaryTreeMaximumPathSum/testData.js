/**
 * Test data for Binary Tree Maximum Path Sum
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: [1, 2, 3],
            expected: 6
        },
        {
            description: 'Basic case from LeetCode example 2 - path does not pass through root',
            input: [-10, 9, 20, null, null, 15, 7],
            expected: 42
        }
    ],

    edgeCases: [
        {
            description: 'Single node tree with positive value',
            input: [5],
            expected: 5
        },
        {
            description: 'Single node tree with negative value',
            input: [-3],
            expected: -3
        },
        {
            description: 'All negative values - best path is a single node',
            input: [-2, -1],
            expected: -1
        }
    ],

    performanceTests: [
        {
            description: 'Balanced tree where the best path does not include the root',
            input: [1, 2, 3, 4, 5, 6, 7],
            expected: 18
        },
        {
            description: 'Larger tree with mixed branch depths',
            input: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
            expected: 48
        }
    ],

    specialCases: [
        {
            description: 'Negative child should be excluded from the best path',
            input: [2, -1],
            expected: 2
        },
        {
            description: 'All negative tree - best path is the least negative single node',
            input: [-1, -2, -3],
            expected: -1
        },
        {
            description: 'Best path is confined to a subtree, skipping negative branches',
            input: [-1, 5, -2, 4, -3, null, null, null, null, null, -1],
            expected: 9
        }
    ]
};

module.exports = testData;
