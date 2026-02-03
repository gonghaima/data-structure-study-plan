const longestConsecutive = require('./solution');
const testCases = require('./testdata');

describe('Longest Consecutive Sequence', () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Test case #${idx + 1}`, () => {
      expect(longestConsecutive(...input)).toBe(expected);
    });
  });
});
