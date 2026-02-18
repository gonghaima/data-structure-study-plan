const inorderTraversal = require('./solution1');
const testData = require('./testData');

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
  testCases.forEach((testCase) => {
    const { description, input, expected } = testCase;

    test(`should ${description}`, () => {
      expect(inorderTraversal(input.root)).toEqual(expected);
    });
  });
}

describe('Binary Tree Inorder Traversal - LeetCode #94', () => {
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
