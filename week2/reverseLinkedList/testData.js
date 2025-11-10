/**
 * Test data for Reverse Linked List
 * Organized by test categories for better maintainability
 */

// Helper function to create linked list from array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    
    const head = { val: arr[0], next: null };
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = { val: arr[i], next: null };
        current = current.next;
    }
    
    return head;
}

// Helper function to convert linked list to array for comparison
function linkedListToArray(head) {
    const result = [];
    let current = head;
    
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    
    return result;
}

const testData = {
    basicFunctionality: [
        {
            description: 'reverse a list with 5 elements',
            input: createLinkedList([1, 2, 3, 4, 5]),
            expected: [5, 4, 3, 2, 1]
        },
        {
            description: 'reverse a list with 2 elements',
            input: createLinkedList([1, 2]),
            expected: [2, 1]
        },
        {
            description: 'reverse a single element list',
            input: createLinkedList([1]),
            expected: [1]
        }
    ],

    edgeCases: [
        {
            description: 'handle empty list',
            input: null,
            expected: []
        }
    ],

    performanceTests: [
        {
            description: 'reverse a large list with 1000 elements',
            input: createLinkedList(Array.from({length: 1000}, (_, i) => i + 1)),
            expected: Array.from({length: 1000}, (_, i) => 1000 - i)
        }
    ],

    specialCases: [
        {
            description: 'reverse list with negative values',
            input: createLinkedList([-5, -1, 0, 3, 7]),
            expected: [7, 3, 0, -1, -5]
        },
        {
            description: 'reverse list with duplicate values',
            input: createLinkedList([1, 2, 2, 3, 3, 3]),
            expected: [3, 3, 3, 2, 2, 1]
        }
    ]
};

module.exports = { testData, createLinkedList, linkedListToArray };