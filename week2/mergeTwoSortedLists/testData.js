// Test data for Merge Two Sorted Lists problem
// Helper function to create linked list from array
function createLinkedList(arr) {
  if (!arr.length) return null;
  const head = { val: arr[0], next: null };
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = { val: arr[i], next: null };
    current = current.next;
  }
  return head;
}

// Helper function to convert linked list to array for testing
function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

module.exports = [
  // Example 1
  { 
    list1: [1,2,4], 
    list2: [1,3,4], 
    expected: [1,1,2,3,4,4] 
  },
  // Example 2
  { 
    list1: [], 
    list2: [], 
    expected: [] 
  },
  // Example 3
  { 
    list1: [], 
    list2: [0], 
    expected: [0] 
  },
  // Edge cases
  { 
    list1: [1], 
    list2: [], 
    expected: [1] 
  },
  { 
    list1: [1,2,3], 
    list2: [4,5,6], 
    expected: [1,2,3,4,5,6] 
  },
  { 
    list1: [4,5,6], 
    list2: [1,2,3], 
    expected: [1,2,3,4,5,6] 
  },
  { 
    list1: [1,1,1], 
    list2: [2,2,2], 
    expected: [1,1,1,2,2,2] 
  }
];

module.exports.createLinkedList = createLinkedList;
module.exports.linkedListToArray = linkedListToArray;