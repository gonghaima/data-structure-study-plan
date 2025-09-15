/**
 * Test data for Two Sum problem
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example',
            input: { nums: [2, 7, 11, 15], target: 9 },
            expected: [0, 1]
        },
        {
            description: 'Different positions',
            input: { nums: [3, 2, 4], target: 6 },
            expected: [1, 2]
        },
        {
            description: 'Same number twice',
            input: { nums: [3, 3], target: 6 },
            expected: [0, 1]
        },
        {
            description: 'Numbers at the end of array',
            input: { nums: [1, 2, 3, 4, 5], target: 9 },
            expected: [3, 4]
        },
        {
            description: 'Minimum array size',
            input: { nums: [1, 2], target: 3 },
            expected: [0, 1]
        }
    ],

    edgeCasesWithDifferentNumberTypes: [
        {
            description: 'Negative numbers case 1',
            input: { nums: [-1, -2, -3, -4, -5], target: -8 },
            expected: [2, 4]
        },
        {
            description: 'Negative numbers case 2',
            input: { nums: [-3, 4, 3, 90], target: 0 },
            expected: [0, 2]
        },
        {
            description: 'Zero case 1',
            input: { nums: [0, 4, 3, 0], target: 0 },
            expected: [0, 3]
        },
        {
            description: 'Zero case 2',
            input: { nums: [-1, 0, 1, 2], target: 1 },
            expected: [1, 2]
        },
        {
            description: 'Large numbers case 1',
            input: { nums: [1000000, 2000000, 3000000], target: 3000000 },
            expected: [0, 1]
        },
        {
            description: 'Large numbers case 2',
            input: { nums: [999999999, 1, 2, 3], target: 1000000000 },
            expected: [0, 1]
        }
    ],

    arrayOrderAndPositioning: [
        {
            description: 'First valid pair when multiple solutions exist',
            input: { nums: [1, 2, 3, 2], target: 4 },
            expected: [0, 2]
        },
        {
            description: 'Unsorted arrays case 1',
            input: { nums: [15, 2, 7, 11], target: 9 },
            expected: [1, 2]
        },
        {
            description: 'Unsorted arrays case 2',
            input: { nums: [5, 1, 3, 9, 2], target: 4 },
            expected: [1, 2]
        },
        {
            description: 'Duplicate values in different positions case 1',
            input: { nums: [1, 1, 1, 1, 2], target: 3 },
            expected: [3, 4]
        },
        {
            description: 'Duplicate values in different positions case 2',
            input: { nums: [2, 5, 5, 11], target: 10 },
            expected: [1, 2]
        }
    ],

    performanceAndComplexity: [
        {
            description: 'Moderately large arrays efficiently',
            input: { 
                nums: Array.from({length: 1000}, (_, i) => i + 1), 
                target: 1999 
            },
            expected: [998, 999]
        },
        {
            description: 'Edge positions - first and last elements',
            input: { nums: [1, 5, 3, 7, 9, 2, 8, 4, 6, 10], target: 11 },
            expected: [4, 5]
        }
    ],

    returnValueValidation: [
        {
            description: 'Array with exactly two elements',
            input: { nums: [1, 2, 3, 4], target: 7 },
            expected: [2, 3]
        },
        {
            description: 'Indices in ascending order',
            input: { nums: [3, 2, 4], target: 6 },
            expected: [1, 2]
        },
        {
            description: 'Valid indices within array bounds',
            input: { nums: [2, 7, 11, 15], target: 9 },
            expected: [0, 1]
        }
    ],

    mathematicalCorrectness: [
        {
            description: 'Returned indices point to numbers that sum to target',
            input: { nums: [2, 7, 11, 15], target: 9 },
            expected: [0, 1]
        },
        {
            description: 'Floating point precision',
            input: { nums: [1.5, 2.5, 3.5], target: 4.0 },
            expected: [0, 1]
        }
    ],

    boundaryConditions: [
        {
            description: 'Minimum possible values',
            input: { nums: [-1000000000, 1000000000], target: 0 },
            expected: [0, 1]
        },
        {
            description: 'Maximum array size scenarios',
            input: { 
                nums: [...Array.from({length: 100}, (_, i) => i), 50], 
                target: 149 
            },
            expected: [74, 75]
        }
    ]
};

module.exports = testData;