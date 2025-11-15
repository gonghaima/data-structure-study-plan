/**
 * Floyd's Cycle Detection Algorithm (Two Pointers)
 * Time: O(n), Space: O(1)
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head.next;
    
    while (fast && fast.next) {
        if (slow === fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return false;
};

module.exports = hasCycle;