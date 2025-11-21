const productExceptSelf = require('./solution');
const testdata = require('./testdata');

describe('Product of Array Except Self', () => {
  testdata.forEach(({ nums, expected }, idx) => {
    test(`Test case #${
      idx + 1
    }: productExceptSelf([${nums}]) === [${expected}]`, () => {
      expect(productExceptSelf(nums)).toEqual(expected);
    });
  });
});
