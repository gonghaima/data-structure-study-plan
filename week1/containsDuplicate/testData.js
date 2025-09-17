/**
 * Test data for Contains Duplicate problem
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1 - contains duplicate',
            input: { nums: [1, 2, 3, 1] },
            expected: true
        },
        {
            description: 'Basic case from LeetCode example 2 - no duplicates',
            input: { nums: [1, 2, 3, 4] },
            expected: false
        },
        {
            description: 'Basic case from LeetCode example 3 - multiple duplicates',
            input: { nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] },
            expected: true
        },
        {
            description: 'Single element - no duplicates possible',
            input: { nums: [1] },
            expected: false
        },
        {
            description: 'Two identical elements',
            input: { nums: [5, 5] },
            expected: true
        },
        {
            description: 'Two different elements',
            input: { nums: [1, 2] },
            expected: false
        }
    ],

    edgeCasesWithDifferentPatterns: [
        {
            description: 'All same elements',
            input: { nums: [7, 7, 7, 7, 7] },
            expected: true
        },
        {
            description: 'Duplicate at the beginning',
            input: { nums: [1, 1, 2, 3, 4, 5] },
            expected: true
        },
        {
            description: 'Duplicate at the end',
            input: { nums: [1, 2, 3, 4, 5, 5] },
            expected: true
        },
        {
            description: 'Duplicate in the middle',
            input: { nums: [1, 2, 3, 3, 4, 5] },
            expected: true
        },
        {
            description: 'Far apart duplicates',
            input: { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1] },
            expected: true
        },
        {
            description: 'Strictly increasing sequence',
            input: { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            expected: false
        },
        {
            description: 'Strictly decreasing sequence',
            input: { nums: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
            expected: false
        }
    ],

    negativeNumbers: [
        {
            description: 'Negative numbers with duplicates',
            input: { nums: [-1, -2, -3, -1] },
            expected: true
        },
        {
            description: 'Negative numbers without duplicates',
            input: { nums: [-1, -2, -3, -4] },
            expected: false
        },
        {
            description: 'Mixed positive and negative with duplicates',
            input: { nums: [-1, 0, 1, -1] },
            expected: true
        },
        {
            description: 'Mixed positive and negative without duplicates',
            input: { nums: [-3, -1, 0, 1, 3] },
            expected: false
        },
        {
            description: 'Zero duplicates',
            input: { nums: [0, 1, 2, 0] },
            expected: true
        }
    ],

    boundaryConditions: [
        {
            description: 'Minimum array length with duplicate',
            input: { nums: [1, 1] },
            expected: true
        },
        {
            description: 'Minimum array length without duplicate',
            input: { nums: [1, 2] },
            expected: false
        },
        {
            description: 'Maximum value duplicates',
            input: { nums: [1000000000, 999999999, 1000000000] },
            expected: true
        },
        {
            description: 'Minimum value duplicates',
            input: { nums: [-1000000000, -999999999, -1000000000] },
            expected: true
        },
        {
            description: 'Large range without duplicates',
            input: { nums: [-1000000000, 0, 1000000000] },
            expected: false
        }
    ],

    performanceAndLargeArrays: [
        {
            description: 'Large array with duplicate at start',
            input: { 
                nums: [1, 1, ...Array.from({length: 998}, (_, i) => i + 2)]
            },
            expected: true
        },
        {
            description: 'Large array with duplicate at end',
            input: { 
                nums: [...Array.from({length: 999}, (_, i) => i + 1), 1]
            },
            expected: true
        },
        {
            description: 'Large array without duplicates',
            input: { 
                nums: Array.from({length: 1000}, (_, i) => i)
            },
            expected: false
        },
        {
            description: 'Large array with duplicate in middle',
            input: { 
                nums: [...Array.from({length: 500}, (_, i) => i), 250, ...Array.from({length: 499}, (_, i) => i + 500)]
            },
            expected: true
        }
    ],

    specialCases: [
        {
            description: 'Alternating pattern with duplicate',
            input: { nums: [1, 2, 1, 2, 3] },
            expected: true
        },
        {
            description: 'Alternating pattern without duplicate',
            input: { nums: [1, 2, 3, 4, 5] },
            expected: false
        },
        {
            description: 'Multiple pairs of duplicates',
            input: { nums: [1, 2, 1, 3, 2, 4] },
            expected: true
        },
        {
            description: 'Almost duplicate - consecutive numbers',
            input: { nums: [1, 2, 3, 4, 5, 6] },
            expected: false
        },
        {
            description: 'Palindrome with duplicates',
            input: { nums: [1, 2, 3, 2, 1] },
            expected: true
        },
        {
            description: 'Random order with early duplicate',
            input: { nums: [5, 3, 8, 5, 1, 9] },
            expected: true
        }
    ],

    mathematicalCorrectness: [
        {
            description: 'Verify duplicate detection accuracy',
            input: { nums: [1, 2, 3, 4, 5, 1] },
            expected: true
        },
        {
            description: 'Verify no false positives',
            input: { nums: [1, 2, 3, 4, 5, 6] },
            expected: false
        },
        {
            description: 'Multiple occurrences of same number',
            input: { nums: [1, 1, 1, 1] },
            expected: true
        },
        {
            description: 'Large numbers precision',
            input: { nums: [999999999, 999999998, 999999999] },
            expected: true
        }
    ]
};

module.exports = testData;