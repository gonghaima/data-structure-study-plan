/**
 * Node Marking Approach (Destructive)
 * Time: O(n), Space: O(1)
 */
var hasCycle = function(head) {
    while (head) {
        if (head.visited) return true;
        head.visited = true;
        head = head.next;
    }
    
    return false;
};

module.exports = hasCycle;