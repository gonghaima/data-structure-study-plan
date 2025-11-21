/**
 * Hash Set Approach
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    
    const visited = new Set();
    
    // Store all nodes from listA
    let current = headA;
    while (current) {
        visited.add(current);
        current = current.next;
    }
    
    // Check if any node in listB exists in set
    current = headB;
    while (current) {
        if (visited.has(current)) {
            return current;
        }
        current = current.next;
    }
    
    return null;
};

module.exports = getIntersectionNode;