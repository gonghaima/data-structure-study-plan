const strStr = require('./solution1');
const testdata = require('./testdata');

describe('Find the Index of the First Occurrence in a String', () => {
  testdata.forEach(({ haystack, needle, expected }, idx) => {
    test(`Test case #${idx + 1}: strStr('${haystack}', '${needle}') === ${expected}`, () => {
      expect(strStr(haystack, needle)).toBe(expected);
    });
  });
});
