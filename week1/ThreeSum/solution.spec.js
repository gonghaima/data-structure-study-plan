const threeSum = require('./solution');
const testdata = require('./testdata');

function normalizeTriplets(arr) {
  // Sort each triplet and the array of triplets for comparison
  return arr
    .map((triplet) => triplet.slice().sort((a, b) => a - b))
    .sort((a, b) => {
      for (let i = 0; i < 3; i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
      }
      return 0;
    });
}

describe('ThreeSum', () => {
  testdata.forEach(({ nums, expected }, idx) => {
    test(`Test case #${idx + 1}: threeSum([${nums}])`, () => {
      const actual = threeSum(nums);
      expect(normalizeTriplets(actual)).toEqual(normalizeTriplets(expected));
    });
  });
});
