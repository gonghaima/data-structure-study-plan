const repeatedSubstringPattern = require('./solution');
const testdata = require('./testdata');

describe('Repeated Substring Pattern', () => {
  testdata.forEach(({ s, expected }, idx) => {
    test(`Test case #${
      idx + 1
    }: repeatedSubstringPattern('${s}') === ${expected}`, () => {
      expect(repeatedSubstringPattern(s)).toBe(expected);
    });
  });
});
