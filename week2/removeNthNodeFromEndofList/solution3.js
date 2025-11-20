/**
 * Recursive approach: Use recursion to count from the end
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  function helper(node) {
    if (!node) return 0;
    
    let count = helper(node.next) + 1;
    
    if (count === n + 1) {
      node.next = node.next.next;
    }
    
    return count;
  }
  
  let count = helper(head);
  return count === n ? head.next : head;
};

module.exports = removeNthFromEnd;