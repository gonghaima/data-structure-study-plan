const { testCases } = require('./testdata');
const topKFrequent = require('./solution');

describe('Top K Frequent Elements', () => {
  testCases.forEach(({ input, output }, idx) => {
    test(`Example ${idx + 1}`, () => {
      const result = topKFrequent(input.nums, input.k);
      // The result can be in any order, so sort for comparison
      expect(result.sort()).toEqual(output.sort());
    });
  });
});
