/**
 * Test data for Path Sum
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: { 
                root: [5,4,8,11,null,13,4,7,2,null,null,null,1], 
                targetSum: 22 
            },
            expected: true
        },
        {
            description: 'Basic case from LeetCode example 2',
            input: { 
                root: [1,2,3], 
                targetSum: 5 
            },
            expected: false
        },
        {
            description: 'Basic case from LeetCode example 3',
            input: { 
                root: [], 
                targetSum: 0 
            },
            expected: false
        }
    ],

    edgeCases: [
        {
            description: 'Single node tree with matching sum',
            input: { 
                root: [5], 
                targetSum: 5 
            },
            expected: true
        },
        {
            description: 'Single node tree with non-matching sum',
            input: { 
                root: [1], 
                targetSum: 2 
            },
            expected: false
        },
        {
            description: 'Tree with negative values',
            input: { 
                root: [-3,9,-10,null,5], 
                targetSum: 11 
            },
            expected: true
        }
    ],

    performanceTests: [
        {
            description: 'Deep tree with target sum at leaf',
            input: { 
                root: [1,2,null,3,null,4,null,5], 
                targetSum: 15 
            },
            expected: true
        }
    ],

    specialCases: [
        {
            description: 'Path sum equals zero',
            input: { 
                root: [0], 
                targetSum: 0 
            },
            expected: true
        },
        {
            description: 'All negative path',
            input: { 
                root: [-1,-2,-3], 
                targetSum: -4 
            },
            expected: true
        }
    ]
};

module.exports = testData;