const productExceptSelf = require('./solution');
const testdata = require('./testdata');

function normalizeZeros(arr) {
  return arr.map(x => (Object.is(x, -0) ? 0 : x));
}

function deepNormalizeZeros(arr) {
  // Handles nested arrays, just in case
  return Array.isArray(arr)
    ? arr.map(x => (Array.isArray(x) ? deepNormalizeZeros(x) : (Object.is(x, -0) ? 0 : x)))
    : arr;
}

describe('Product of Array Except Self', () => {
  testdata.forEach(({ nums, expected }, idx) => {
    test(`Test case #${idx + 1}: productExceptSelf([${nums}]) === [${expected}]`, () => {
      const actual = productExceptSelf(nums);
      expect(deepNormalizeZeros(actual)).toEqual(deepNormalizeZeros(expected));
    });
  });
});
