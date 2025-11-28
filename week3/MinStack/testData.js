/**
 * Test data for Min Stack
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example',
            operations: ["MinStack","push","push","push","getMin","pop","top","getMin"],
            inputs: [[],[-2],[0],[-3],[],[],[],[]],
            expected: [null,null,null,null,-3,null,0,-2]
        },
        {
            description: 'Simple push and getMin operations',
            operations: ["MinStack","push","getMin","push","getMin"],
            inputs: [[],[5],[],[3],[]],
            expected: [null,null,5,null,3]
        }
    ],

    edgeCases: [
        {
            description: 'Single element operations',
            operations: ["MinStack","push","top","getMin","pop"],
            inputs: [[],[1],[],[],[]],
            expected: [null,null,1,1,null]
        },
        {
            description: 'Duplicate minimum values',
            operations: ["MinStack","push","push","getMin","pop","getMin"],
            inputs: [[],[2],[2],[],[],[]],
            expected: [null,null,null,2,null,2]
        }
    ],

    performanceTests: [
        {
            description: 'Large number of operations',
            operations: ["MinStack", ...Array(100).fill("push"), ...Array(50).fill("getMin"), ...Array(100).fill("pop")],
            inputs: [[], ...Array(100).fill().map((_, i) => [i]), ...Array(50).fill([]), ...Array(100).fill([])],
            expected: [null, ...Array(100).fill(null), ...Array(50).fill(0), ...Array(100).fill(null)]
        }
    ],

    specialCases: [
        {
            description: 'Negative numbers with minimum tracking',
            operations: ["MinStack","push","push","push","getMin","pop","getMin"],
            inputs: [[],[-1],[-5],[-2],[],[],[]],
            expected: [null,null,null,null,-5,null,-5]
        },
        {
            description: 'Mixed positive and negative numbers',
            operations: ["MinStack","push","push","push","getMin","pop","push","getMin"],
            inputs: [[],[10],[-5],[3],[],[],[-10],[]],
            expected: [null,null,null,null,-5,null,null,-10]
        }
    ]
};

module.exports = testData;