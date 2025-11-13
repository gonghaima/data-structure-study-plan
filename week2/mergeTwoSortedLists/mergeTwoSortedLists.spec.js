const mergeTwoLists = require('./solution');
const testData = require('./testData');
const { createLinkedList, linkedListToArray } = testData;

describe('Merge Two Sorted Lists', () => {
  testData.forEach(({ list1, list2, expected }, idx) => {
    test(`Test case #${idx + 1}: mergeTwoLists([${list1}], [${list2}])`, () => {
      const linkedList1 = createLinkedList(list1);
      const linkedList2 = createLinkedList(list2);
      const result = mergeTwoLists(linkedList1, linkedList2);
      const actual = linkedListToArray(result);
      expect(actual).toEqual(expected);
    });
  });
});
