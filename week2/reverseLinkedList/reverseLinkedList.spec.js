const reverseList = require('./solution');
const { testData, linkedListToArray } = require('./testData');

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
    testCases.forEach(testCase => {
        const { description, input, expected } = testCase;
        
        test(`should ${description}`, () => {
            const result = reverseList(input);
            const resultArray = linkedListToArray(result);
            expect(resultArray).toEqual(expected);
        });
    });
}

describe('Reverse Linked List - LeetCode #206', () => {
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