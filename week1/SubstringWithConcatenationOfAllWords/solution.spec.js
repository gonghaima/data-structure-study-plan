// Jest spec for 'Substring with Concatenation of All Words'
const findSubstring = require('./solution');
const cases = require('./testdata');

describe('findSubstring', () => {
  cases.forEach(({ input, output }, idx) => {
    test(`Case ${idx + 1}`, () => {
      expect(findSubstring(input.s, input.words).sort()).toEqual(output.sort());
    });
  });
});
