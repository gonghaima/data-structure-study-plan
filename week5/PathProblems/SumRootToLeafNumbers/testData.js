/**
 * Test data for Sum Root to Leaf Numbers
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: [1, 2, 3],
            expected: 25
        },
        {
            description: 'Basic case from LeetCode example 2',
            input: [4, 9, 0, 5, 1],
            expected: 1026
        }
    ],

    edgeCases: [
        {
            description: 'Single node tree',
            input: [5],
            expected: 5
        },
        {
            description: 'Single node tree with value zero',
            input: [0],
            expected: 0
        },
        {
            description: 'Root with only left child',
            input: [1, 2],
            expected: 12
        },
        {
            description: 'Root with only right child',
            input: [1, null, 2],
            expected: 12
        }
    ],

    performanceTests: [
        {
            description: 'Deep left-skewed tree near max depth',
            input: [1, 2, null, 3, null, 4, null, 5],
            expected: 12345
        }
    ],

    specialCases: [
        {
            description: 'Tree with a leading zero digit in a path',
            input: [0, 1, 2],
            expected: 3
        },
        {
            description: 'Tree where every node shares the same digit',
            input: [9, 9, 9],
            expected: 198
        }
    ]
};

module.exports = testData;
