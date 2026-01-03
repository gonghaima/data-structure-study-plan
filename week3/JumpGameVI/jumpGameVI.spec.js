const maxResult = require('./solution');
const testData = require('./testData');

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
  testCases.forEach((testCase) => {
    const { description, input, expected } = testCase;

    test(`should ${description}`, () => {
      expect(maxResult(input.nums, input.k)).toBe(expected);
    });
  });
}

describe('Jump Game VI - LeetCode #1696', () => {
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