/**
 * Test data for Evaluate Reverse Polish Notation
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: ["2","1","+","3","*"],
            expected: 9
        },
        {
            description: 'Basic case from LeetCode example 2',
            input: ["4","13","5","/","+"],
            expected: 6
        },
        {
            description: 'Simple addition',
            input: ["3","4","+"],
            expected: 7
        },
        {
            description: 'Simple subtraction',
            input: ["5","2","-"],
            expected: 3
        },
        {
            description: 'Simple multiplication',
            input: ["3","4","*"],
            expected: 12
        },
        {
            description: 'Simple division',
            input: ["8","2","/"],
            expected: 4
        }
    ],

    edgeCases: [
        {
            description: 'Single number',
            input: ["42"],
            expected: 42
        },
        {
            description: 'Negative number',
            input: ["-3"],
            expected: -3
        },
        {
            description: 'Division with truncation toward zero (positive)',
            input: ["7","3","/"],
            expected: 2
        },
        {
            description: 'Division with truncation toward zero (negative)',
            input: ["-7","3","/"],
            expected: -2
        },
        {
            description: 'Zero result',
            input: ["0","3","*"],
            expected: 0
        }
    ],

    performanceTests: [
        {
            description: 'Complex expression from LeetCode example 3',
            input: ["10","6","9","3","+","-11","*","/","*","17","+","5","+"],
            expected: 22
        }
    ],

    specialCases: [
        {
            description: 'Multiple operations with negative numbers',
            input: ["-1","2","+","3","*"],
            expected: 3
        },
        {
            description: 'Subtraction resulting in negative',
            input: ["2","5","-"],
            expected: -3
        },
        {
            description: 'Chain of operations',
            input: ["1","2","+","3","4","+","*"],
            expected: 21
        }
    ]
};

module.exports = testData;