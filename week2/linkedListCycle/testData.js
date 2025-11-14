// Test data for Linked List Cycle problem

// ListNode definition
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to create linked list with cycle
function createLinkedListWithCycle(values, pos) {
  if (values.length === 0) return null;
  
  const nodes = values.map(val => new ListNode(val));
  
  // Connect nodes
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  
  // Create cycle if pos is valid
  if (pos >= 0 && pos < nodes.length) {
    nodes[nodes.length - 1].next = nodes[pos];
  }
  
  return nodes[0];
}

module.exports = [
  // Example 1: [3,2,0,-4], pos = 1
  { head: createLinkedListWithCycle([3,2,0,-4], 1), expected: true },
  // Example 2: [1,2], pos = 0  
  { head: createLinkedListWithCycle([1,2], 0), expected: true },
  // Example 3: [1], pos = -1
  { head: createLinkedListWithCycle([1], -1), expected: false },
  // Edge cases
  { head: createLinkedListWithCycle([], -1), expected: false },
  { head: createLinkedListWithCycle([1,2,3,4,5], 2), expected: true },
  { head: createLinkedListWithCycle([1,2,3], -1), expected: false },
];