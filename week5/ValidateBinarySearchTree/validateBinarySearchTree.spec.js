const isValidBST = require('./solution');
const testData = require('./testData');

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
    testCases.forEach(testCase => {
        const { description, input, expected } = testCase;
        
        test(`should ${description}`, () => {
            expect(isValidBST(input)).toBe(expected);
        });
    });
}

describe('Validate Binary Search Tree - LeetCode #98', () => {
    describe('Basic functionality', () => {
        runTestCases(testData.basicFunctionality);
    });

    describe('Edge cases', () => {
        runTestCases(testData.edgeCases);
    });

    describe('Performance tests', () => {
        runTestCases(testData.performanceTests);
    });

    describe('Special cases', () => {
        runTestCases(testData.specialCases);
    });
});