/**
 * Hash Set Approach
 * Time: O(n), Space: O(n)
 */
var hasCycle = function(head) {
    const visited = new Set();
    
    while (head) {
        if (visited.has(head)) return true;
        visited.add(head);
        head = head.next;
    }
    
    return false;
};

module.exports = hasCycle;