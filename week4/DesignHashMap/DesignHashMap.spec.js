// DesignHashMap.spec.js
const testCases = require('./testdata');
const Solution = require('./solution');

// Optionally, import other solutions for comparison
// const Solution1 = require('./solution1');

describe('DesignHashMap', () => {
  testCases.forEach(({ input, expected }, idx) => {
    test(`Test case #${idx + 1}`, () => {
      const outputs = [];
      const obj = new Solution();
      input.forEach((op, i) => {
        const [method, ...args] = op;
        if (typeof obj[method] === 'function') {
          outputs.push(obj[method](...args));
        } else {
          outputs.push(null);
        }
      });
      expect(outputs).toEqual(expected);
    });
  });
});
