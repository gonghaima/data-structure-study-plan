/**
 * Test data for Valid Parentheses
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case - single pair of parentheses',
            input: "()",
            expected: true
        },
        {
            description: 'Basic case - multiple types of brackets',
            input: "()[]{}", 
            expected: true
        },
        {
            description: 'Basic case - mismatched brackets',
            input: "(]",
            expected: false
        },
        {
            description: 'Basic case - nested brackets',
            input: "([])",
            expected: true
        },
        {
            description: 'Basic case - wrong order',
            input: "([)]",
            expected: false
        }
    ],

    edgeCases: [
        {
            description: 'Single opening bracket',
            input: "(",
            expected: false
        },
        {
            description: 'Single closing bracket',
            input: ")",
            expected: false
        },
        {
            description: 'Empty string',
            input: "",
            expected: true
        },
        {
            description: 'Only opening brackets',
            input: "(((",
            expected: false
        },
        {
            description: 'Only closing brackets',
            input: ")))",
            expected: false
        }
    ],

    performanceTests: [
        {
            description: 'Large valid string',
            input: "()".repeat(5000),
            expected: true
        },
        {
            description: 'Large invalid string',
            input: "(".repeat(5000) + ")".repeat(4999),
            expected: false
        }
    ],

    specialCases: [
        {
            description: 'Complex nested structure',
            input: "{[()]}",
            expected: true
        },
        {
            description: 'Multiple pairs in sequence',
            input: "()()(){}{}{}[][][] ",
            expected: false
        },
        {
            description: 'Interleaved valid brackets',
            input: "({[]})",
            expected: true
        },
        {
            description: 'Wrong closing order',
            input: "({[}])",
            expected: false
        }
    ]
};

module.exports = testData;