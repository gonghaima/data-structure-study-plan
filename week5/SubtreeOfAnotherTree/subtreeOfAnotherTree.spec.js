const isSubtree = require('./solution2');
const testData = require('./testData');

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
    testCases.forEach(testCase => {
        const { description, root, subRoot, expected } = testCase;

        test(`should ${description}`, () => {
            expect(isSubtree(root, subRoot)).toBe(expected);
        });
    });
}

describe('Subtree of Another Tree - LeetCode #572', () => {
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
