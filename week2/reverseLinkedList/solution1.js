/**
 * Recursive approach - O(n) space complexity
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) return head;
    
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
};

module.exports = reverseList;