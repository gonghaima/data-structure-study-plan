/**
 * Two Pointers Approach - Optimal Solution
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    
    let pA = headA;
    let pB = headB;
    
    // When one pointer reaches end, redirect to other list's head
    // This ensures both pointers travel same distance
    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }
    
    return pA;
};

module.exports = getIntersectionNode;