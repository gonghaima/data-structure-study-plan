const isAnagram = require('./solution');
const testdata = require('./testdata');

describe('Valid Anagram', () => {
  testdata.forEach(({ s, t, expected }, idx) => {
    test(`Test case #${idx + 1}: isAnagram('${s}', '${t}') === ${expected}`, () => {
      expect(isAnagram(s, t)).toBe(expected);
    });
  });
});
