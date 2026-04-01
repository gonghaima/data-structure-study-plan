const rightSideView = require('./solution');
const testData = require('./testData');

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
    testCases.forEach(testCase => {
        const { description, input, expected } = testCase;

        test(`should ${description}`, () => {
            expect(rightSideView(input)).toEqual(expected);
        });
    });
}

describe('Binary Tree Right Side View - LeetCode #199', () => {
    describe('Basic functionality', () => {
        runTestCases(testData.basicFunctionality);
    });

    describe('Edge cases', () => {
        runTestCases(testData.edgeCases);
    });

    describe('Special cases', () => {
        runTestCases(testData.specialCases);
    });
});
