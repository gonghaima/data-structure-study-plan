const maxDepth = require('./solution2');
const { testData } = require('./testData');

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
  testCases.forEach((testCase) => {
    const { description, input, expected } = testCase;

    test(`should ${description}`, () => {
      expect(maxDepth(input)).toBe(expected);
    });
  });
}

describe('Maximum Depth of Binary Tree - LeetCode #104', () => {
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