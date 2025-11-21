/**
 * Length Difference Approach
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    
    // Calculate lengths
    const getLength = (head) => {
        let length = 0;
        while (head) {
            length++;
            head = head.next;
        }
        return length;
    };
    
    let lenA = getLength(headA);
    let lenB = getLength(headB);
    
    let pA = headA;
    let pB = headB;
    
    // Align starting positions
    if (lenA > lenB) {
        for (let i = 0; i < lenA - lenB; i++) {
            pA = pA.next;
        }
    } else {
        for (let i = 0; i < lenB - lenA; i++) {
            pB = pB.next;
        }
    }
    
    // Find intersection
    while (pA && pB) {
        if (pA === pB) return pA;
        pA = pA.next;
        pB = pB.next;
    }
    
    return null;
};

module.exports = getIntersectionNode;