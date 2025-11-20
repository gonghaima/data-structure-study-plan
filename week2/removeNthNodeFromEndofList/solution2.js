/**
 * Stack-based approach: Push all nodes to stack, then pop n times
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let stack = [];
  let dummy = { next: head };
  let curr = dummy;
  
  while (curr) {
    stack.push(curr);
    curr = curr.next;
  }
  
  for (let i = 0; i < n; i++) {
    stack.pop();
  }
  
  let prev = stack[stack.length - 1];
  prev.next = prev.next.next;
  
  return dummy.next;
};

module.exports = removeNthFromEnd;