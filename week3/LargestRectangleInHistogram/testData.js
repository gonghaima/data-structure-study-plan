/**
 * Test data for Largest Rectangle in Histogram
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: [2,1,5,6,2,3],
            expected: 10
        },
        {
            description: 'Basic case from LeetCode example 2',
            input: [2,4],
            expected: 4
        },
        {
            description: 'Single bar',
            input: [5],
            expected: 5
        },
        {
            description: 'Two equal bars',
            input: [3,3],
            expected: 6
        }
    ],

    edgeCases: [
        {
            description: 'Single zero height bar',
            input: [0],
            expected: 0
        },
        {
            description: 'All zero heights',
            input: [0,0,0],
            expected: 0
        },
        {
            description: 'Ascending heights',
            input: [1,2,3,4,5],
            expected: 9
        },
        {
            description: 'Descending heights',
            input: [5,4,3,2,1],
            expected: 9
        }
    ],

    performanceTests: [
        {
            description: 'Large array with same heights',
            input: new Array(1000).fill(3),
            expected: 3000
        }
    ],

    specialCases: [
        {
            description: 'Mountain shape',
            input: [1,2,3,2,1],
            expected: 6
        },
        {
            description: 'Valley shape',
            input: [3,1,3],
            expected: 3
        },
        {
            description: 'Complex histogram',
            input: [6,7,5,2,4,5,9,3],
            expected: 16
        }
    ]
};

module.exports = testData;