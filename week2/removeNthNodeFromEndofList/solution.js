/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = { next: head };
  let fast = dummy, slow = dummy;
  
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  
  slow.next = slow.next.next;
  return dummy.next;
};

module.exports = removeNthFromEnd;
