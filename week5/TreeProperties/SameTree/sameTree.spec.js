const isSameTree = require('./solution1.mySolution');
const testData = require('./testData');

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
    testCases.forEach(testCase => {
        const { description, p, q, expected } = testCase;

        test(`should ${description}`, () => {
            expect(isSameTree(p, q)).toBe(expected);
        });
    });
}

describe('Same Tree - LeetCode #100', () => {
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
