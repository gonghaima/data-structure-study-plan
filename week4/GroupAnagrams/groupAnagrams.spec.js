const groupAnagrams = require('./solution');
const testData = require('./testData');

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
  testCases.forEach((testCase) => {
    const { description, input, expected } = testCase;

    test(`should ${description}`, () => {
      const result = groupAnagrams(input);
      // Sort both result and expected for comparison since order doesn't matter
      const sortedResult = result.map(group => group.sort()).sort();
      const sortedExpected = expected.map(group => group.sort()).sort();
      expect(sortedResult).toEqual(sortedExpected);
    });
  });
}

describe('Group Anagrams - LeetCode #49', () => {
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