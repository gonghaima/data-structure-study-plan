const repeatedStringMatch = require('./solution2');
const testdata = require('./testdata');

describe('Repeated String Match', () => {
  testdata.forEach(({ a, b, expected }, idx) => {
    test(`Test case #${idx + 1}: repeatedStringMatch('${a}', '${b}') === ${expected}`, () => {
      expect(repeatedStringMatch(a, b)).toBe(expected);
    });
  });
});
