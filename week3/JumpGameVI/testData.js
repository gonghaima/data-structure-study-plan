/**
 * Test data for Jump Game VI
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: { nums: [1, -1, -2, 4, -7, 3], k: 2 },
            expected: 7
        },
        {
            description: 'Basic case from LeetCode example 2',
            input: { nums: [10, -5, -2, 4, 0, 3], k: 3 },
            expected: 17
        },
        {
            description: 'Basic case from LeetCode example 3',
            input: { nums: [1, -5, -20, 4, -1, 3, -6, -3], k: 2 },
            expected: 0
        }
    ],

    edgeCases: [
        {
            description: 'Single element array',
            input: { nums: [5], k: 1 },
            expected: 5
        },
        {
            description: 'All negative numbers',
            input: { nums: [-5, -3, -8, -1], k: 2 },
            expected: -9
        },
        {
            description: 'k equals array length',
            input: { nums: [1, 2, 3], k: 3 },
            expected: 6
        }
    ],

    performanceTests: [
        {
            description: 'Large array with mixed values',
            input: { nums: Array.from({length: 1000}, (_, i) => i % 2 === 0 ? i : -i), k: 10 },
            expected: 248501
        }
    ],

    specialCases: [
        {
            description: 'Alternating positive and negative',
            input: { nums: [1, -1, 2, -2, 3], k: 1 },
            expected: 3
        },
        {
            description: 'k = 1 forces consecutive jumps',
            input: { nums: [5, -3, 8, -1, 4], k: 1 },
            expected: 13
        }
    ]
};

module.exports = testData;