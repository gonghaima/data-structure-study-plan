const maxSlidingWindow = require('./solution');
const testdata = require('./testdata');

describe('Sliding Window Maximum', () => {
  testdata.forEach(({ nums, k, expected }, idx) => {
    test(`Example ${idx + 1}`, () => {
      expect(maxSlidingWindow(nums, k)).toEqual(expected);
    });
  });
});
