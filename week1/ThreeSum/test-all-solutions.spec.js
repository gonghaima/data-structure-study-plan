const testdata = require('./testdata');

// Import all solution variants
const solutions = {
  'Two Pointer (Original)': require('./solution'),
  'Brute Force': require('./solution-brute-force'),
  'HashMap': require('./solution-hashmap'),
  'No Sort': require('./solution-no-sort'),
  'Optimized Two Pointer': require('./solution-optimized-two-pointer'),
  'Divide and Conquer': require('./solution-divide-conquer')
};

function normalizeTriplets(arr) {
  // Sort each triplet and the array of triplets for comparison
  return arr.map(triplet => triplet.slice().sort((a,b) => a-b))
    .sort((a, b) => {
      for (let i = 0; i < 3; i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
      }
      return 0;
    });
}

describe('3Sum - All Solutions', () => {
  Object.entries(solutions).forEach(([solutionName, solutionFn]) => {
    describe(`${solutionName}`, () => {
      testdata.forEach(({ nums, expected }, idx) => {
        test(`Test case #${idx + 1}: threeSum([${nums}])`, () => {
          // Create a copy of nums since some solutions might modify it
          const numsCopy = [...nums];
          const actual = solutionFn(numsCopy);
          expect(normalizeTriplets(actual)).toEqual(normalizeTriplets(expected));
        });
      });
    });
  });
});