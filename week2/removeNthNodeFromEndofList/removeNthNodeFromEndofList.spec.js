const removeNthFromEnd = require('./solution');
const { testData, linkedListToArray } = require('./testData');

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
    testCases.forEach(testCase => {
        const { description, input, expected } = testCase;
        
        test(`should ${description}`, () => {
            const result = removeNthFromEnd(input.head, input.n);
            expect(linkedListToArray(result)).toEqual(expected);
        });
    });
}

describe('Remove Nth Node From End of List - LeetCode #19', () => {
    describe('Basic functionality', () => {
        runTestCases(testData.basicFunctionality);
    });

    describe('Edge cases', () => {
        runTestCases(testData.edgeCases);
    });

    describe('Performance tests', () => {
        runTestCases(testData.performanceTests);
    });
});