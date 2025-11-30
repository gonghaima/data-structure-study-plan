const dailyTemperatures = require('./solution');
const testdata = require('./testdata');

describe('Daily Temperatures', () => {
  testdata.forEach(({ temperatures, expected }, idx) => {
    test(`Test case #${idx + 1}: dailyTemperatures([${temperatures}])`, () => {
      const actual = dailyTemperatures(temperatures);
      expect(actual).toEqual(expected);
    });
  });
});