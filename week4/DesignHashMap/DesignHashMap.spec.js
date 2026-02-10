// DesignHashMap.spec.js
const testCases = require('./testdata');
const Solution = require('./solution1');

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
          if (method === 'get') {
            outputs.push(obj[method](...args));
          } else {
            obj[method](...args);
            outputs.push(null);
          }
        } else {
          outputs.push(null);
        }
      });
      expect(outputs).toEqual(expected);
    });
  });
});
