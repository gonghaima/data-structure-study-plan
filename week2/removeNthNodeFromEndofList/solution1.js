/**
 * Two-pass approach: First pass to count length, second pass to remove
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let length = 0;
  let curr = head;
  
  while (curr) {
    length++;
    curr = curr.next;
  }
  
  if (n === length) return head.next;
  
  curr = head;
  for (let i = 0; i < length - n - 1; i++) {
    curr = curr.next;
  }
  
  curr.next = curr.next.next;
  return head;
};

module.exports = removeNthFromEnd;