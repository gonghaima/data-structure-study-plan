/**
 * Stack-based approach - O(n) space complexity
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return null;
    
    const stack = [];
    let current = head;
    
    while (current) {
        stack.push(current);
        current = current.next;
    }
    
    const newHead = stack.pop();
    current = newHead;
    
    while (stack.length > 0) {
        current.next = stack.pop();
        current = current.next;
    }
    
    current.next = null;
    return newHead;
};

module.exports = reverseList;