/**
 * Test data for Remove Nth Node From End of List
 * Organized by test categories for better maintainability
 */

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

// Helper function to convert linked list to array
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
            description: 'remove 2nd node from end in [1,2,3,4,5]',
            input: { head: createLinkedList([1,2,3,4,5]), n: 2 },
            expected: [1,2,3,5]
        },
        {
            description: 'remove 1st node from end in [1,2]',
            input: { head: createLinkedList([1,2]), n: 1 },
            expected: [1]
        }
    ],

    edgeCases: [
        {
            description: 'remove only node in single-node list',
            input: { head: createLinkedList([1]), n: 1 },
            expected: []
        },
        {
            description: 'remove head (last node from end)',
            input: { head: createLinkedList([1,2,3]), n: 3 },
            expected: [2,3]
        }
    ],

    performanceTests: [
        {
            description: 'remove from large list',
            input: { head: createLinkedList(Array.from({length: 30}, (_, i) => i + 1)), n: 15 },
            expected: Array.from({length: 29}, (_, i) => i < 15 ? i + 1 : i + 2)
        }
    ]
};

module.exports = { testData, createLinkedList, linkedListToArray };