const shortestPalindrome = require('./solution1');
const testdata = require('./testdata');

describe('Shortest Palindrome', () => {
  testdata.forEach(({ s, expected }, idx) => {
    test(`Test case #${idx + 1}: shortestPalindrome('${s}') === '${expected}'`, () => {
      expect(shortestPalindrome(s)).toBe(expected);
    });
  });
});
