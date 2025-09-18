/**
 * Test data for Maximum Subarray problem
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] },
            expected: 6
        },
        {
            description: 'Single element from LeetCode example 2',
            input: { nums: [1] },
            expected: 1
        },
        {
            description: 'All positive numbers from LeetCode example 3',
            input: { nums: [5, 4, -1, 7, 8] },
            expected: 23
        },
        {
            description: 'Single negative element',
            input: { nums: [-1] },
            expected: -1
        },
        {
            description: 'Two elements - both positive',
            input: { nums: [1, 2] },
            expected: 3
        },
        {
            description: 'Two elements - mixed signs',
            input: { nums: [-1, 2] },
            expected: 2
        }
    ],

    edgeCasesWithDifferentPatterns: [
        {
            description: 'All negative numbers',
            input: { nums: [-3, -2, -1, -5] },
            expected: -1
        },
        {
            description: 'All positive numbers',
            input: { nums: [1, 2, 3, 4, 5] },
            expected: 15
        },
        {
            description: 'All zeros',
            input: { nums: [0, 0, 0, 0] },
            expected: 0
        },
        {
            description: 'Mixed with zeros',
            input: { nums: [0, -1, 0, 1, 0] },
            expected: 1
        },
        {
            description: 'Alternating positive and negative',
            input: { nums: [1, -1, 1, -1, 1] },
            expected: 1
        },
        {
            description: 'Large negative followed by small positive',
            input: { nums: [-100, 1, 2] },
            expected: 3
        },
        {
            description: 'Small positive followed by large negative',
            input: { nums: [1, 2, -100] },
            expected: 3
        }
    ],

    complexSubarrayScenarios: [
        {
            description: 'Multiple potential subarrays - optimal in middle',
            input: { nums: [1, -3, 2, 1, -1] },
            expected: 3
        },
        {
            description: 'Optimal subarray at the beginning',
            input: { nums: [5, 4, -10, 1, 2] },
            expected: 9
        },
        {
            description: 'Optimal subarray at the end',
            input: { nums: [1, 2, -10, 5, 4] },
            expected: 9
        },
        {
            description: 'Entire array is optimal',
            input: { nums: [1, 2, 3, 4] },
            expected: 10
        },
        {
            description: 'Single element in middle is optimal',
            input: { nums: [-5, 10, -3] },
            expected: 10
        },
        {
            description: 'Kadane algorithm stress test',
            input: { nums: [-2, -3, 4, -1, -2, 1, 5, -3] },
            expected: 7
        }
    ],

    boundaryConditions: [
        {
            description: 'Minimum array length',
            input: { nums: [42] },
            expected: 42
        },
        {
            description: 'Maximum positive value',
            input: { nums: [10000] },
            expected: 10000
        },
        {
            description: 'Maximum negative value',
            input: { nums: [-10000] },
            expected: -10000
        },
        {
            description: 'Mix of boundary values',
            input: { nums: [-10000, 10000, -10000] },
            expected: 10000
        },
        {
            description: 'Large positive and negative values',
            input: { nums: [9999, -5000, 9999] },
            expected: 14998
        }
    ],

    performanceAndLargeArrays: [
        {
            description: 'Large array with optimal subarray at start',
            input: { 
                nums: [100, 200, 300, ...Array.from({length: 97}, () => -1)]
            },
            expected: 600
        },
        {
            description: 'Large array with optimal subarray at end',
            input: { 
                nums: [...Array.from({length: 97}, () => -1), 100, 200, 300]
            },
            expected: 600
        },
        {
            description: 'Large array - all positive',
            input: { 
                nums: Array.from({length: 100}, (_, i) => i + 1)
            },
            expected: 5050 // Sum of 1 to 100
        },
        {
            description: 'Large array - alternating pattern',
            input: { 
                nums: Array.from({length: 100}, (_, i) => i % 2 === 0 ? 10 : -1)
            },
            expected: 451
        }
    ],

    mathematicalCorrectness: [
        {
            description: 'Verify sum calculation accuracy',
            input: { nums: [1, 2, 3, -2, 5] },
            expected: 9
        },
        {
            description: 'Negative sum should pick least negative',
            input: { nums: [-5, -2, -8, -1] },
            expected: -1
        },
        {
            description: 'Zero in negative array',
            input: { nums: [-3, 0, -2] },
            expected: 0
        },
        {
            description: 'Subarray crossing zero',
            input: { nums: [2, 0, -1, 3] },
            expected: 4
        },
        {
            description: 'Large sum verification',
            input: { nums: [1000, 2000, 3000, 4000] },
            expected: 10000
        }
    ],

    kadaneAlgorithmSpecific: [
        {
            description: 'Classic Kadane example',
            input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] },
            expected: 6
        },
        {
            description: 'Reset current sum scenario',
            input: { nums: [5, -10, 3, 4] },
            expected: 7
        },
        {
            description: 'Never reset scenario',
            input: { nums: [1, 2, -1, 3] },
            expected: 5
        },
        {
            description: 'Multiple resets',
            input: { nums: [1, -5, 2, -3, 4, -1] },
            expected: 4
        },
        {
            description: 'Immediate reset after start',
            input: { nums: [1, -10, 5, 6] },
            expected: 11
        }
    ],

    specialCases: [
        {
            description: 'Palindromic array',
            input: { nums: [1, 2, 3, 2, 1] },
            expected: 9
        },
        {
            description: 'Symmetric negative array',
            input: { nums: [-1, -2, -3, -2, -1] },
            expected: -1
        },
        {
            description: 'Mountain pattern',
            input: { nums: [1, 2, 3, 4, 3, 2, 1] },
            expected: 16
        },
        {
            description: 'Valley pattern',
            input: { nums: [-1, -2, -3, -2, -1] },
            expected: -1
        },
        {
            description: 'Sawtooth pattern',
            input: { nums: [1, -1, 2, -1, 3, -1] },
            expected: 4
        }
    ]
};

module.exports = testData;