const hasCycle = require('./solution');
const testData = require('./testData');

describe('Linked List Cycle', () => {
  testData.forEach(({ head, expected }, idx) => {
    test(`Test case #${idx + 1}`, () => {
      expect(hasCycle(head)).toBe(expected);
    });
  });
});