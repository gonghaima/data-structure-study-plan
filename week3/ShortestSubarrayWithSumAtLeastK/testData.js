/**
 * Test data for Shortest Subarray with Sum at Least K
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'single element equal to k',
            input: { nums: [1], k: 1 },
            expected: 1
        },
        {
            description: 'no subarray with sum >= k',
            input: { nums: [1, 2], k: 4 },
            expected: -1
        },
        {
            description: 'entire array needed',
            input: { nums: [2, -1, 2], k: 3 },
            expected: 3
        }
    ],

    edgeCases: [
        {
            description: 'single element greater than k',
            input: { nums: [5], k: 3 },
            expected: 1
        },
        {
            description: 'all negative numbers',
            input: { nums: [-1, -2, -3], k: 1 },
            expected: -1
        },
        {
            description: 'mixed positive and negative',
            input: { nums: [1, -1, 1], k: 1 },
            expected: 1
        }
    ],

    performanceTests: [
        {
            description: 'large array with solution at end',
            input: { nums: Array(1000).fill(1).concat([1000]), k: 1000 },
            expected: 1
        }
    ],

    specialCases: [
        {
            description: 'prefix sum optimization case',
            input: { nums: [1, 1, 1, 1, 1, 1, 1, 1], k: 11 },
            expected: -1
        },
        {
            description: 'deque optimization needed',
            input: { nums: [84, -37, 32, 40, 95], k: 167 },
            expected: 3
        }
    ]
};

module.exports = testData;