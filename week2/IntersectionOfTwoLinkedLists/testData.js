/**
 * Test data for Intersection of Two Linked Lists
 * Organized by test categories for better maintainability
 */

// ListNode definition for testing
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Helper function to create linked list with intersection
function createIntersectedLists(listAVals, listBVals, skipA, skipB) {
    if (skipA >= listAVals.length || skipB >= listBVals.length) {
        // No intersection case
        const listA = createLinkedList(listAVals);
        const listB = createLinkedList(listBVals);
        return { headA: listA, headB: listB, intersection: null };
    }

    // Create intersection part
    const intersectionVals = listAVals.slice(skipA);
    const intersection = createLinkedList(intersectionVals);

    // Create listA
    const headA = createLinkedList(listAVals.slice(0, skipA));
    connectToTail(headA, intersection);

    // Create listB
    const headB = createLinkedList(listBVals.slice(0, skipB));
    connectToTail(headB, intersection);

    return { headA, headB, intersection };
}

function createLinkedList(vals) {
    if (!vals.length) return null;
    const head = new ListNode(vals[0]);
    let current = head;
    for (let i = 1; i < vals.length; i++) {
        current.next = new ListNode(vals[i]);
        current = current.next;
    }
    return head;
}

function connectToTail(head, tail) {
    if (!head) return tail;
    if (!tail) return head;
    let current = head;
    while (current.next) {
        current = current.next;
    }
    current.next = tail;
    return head;
}

const testData = {
    basicFunctionality: [
        {
            description: 'intersect at node with value 8',
            setup: () => createIntersectedLists([4,1,8,4,5], [5,6,1,8,4,5], 2, 3),
            expectedVal: 8
        },
        {
            description: 'intersect at node with value 2',
            setup: () => createIntersectedLists([1,9,1,2,4], [3,2,4], 3, 1),
            expectedVal: 2
        }
    ],

    edgeCases: [
        {
            description: 'no intersection',
            setup: () => createIntersectedLists([2,6,4], [1,5], 3, 2),
            expectedVal: null
        },
        {
            description: 'single node intersection',
            setup: () => {
                const shared = new ListNode(1);
                return { headA: shared, headB: shared, intersection: shared };
            },
            expectedVal: 1
        },
        {
            description: 'one empty list',
            setup: () => ({ headA: null, headB: createLinkedList([1,2,3]), intersection: null }),
            expectedVal: null
        },
        {
            description: 'both empty lists',
            setup: () => ({ headA: null, headB: null, intersection: null }),
            expectedVal: null
        }
    ],

    performanceTests: [
        {
            description: 'large lists with intersection at end',
            setup: () => {
                const largeA = Array.from({length: 1000}, (_, i) => i);
                const largeB = Array.from({length: 500}, (_, i) => i + 1000);
                return createIntersectedLists([...largeA, 9999], [...largeB, 9999], 1000, 500);
            },
            expectedVal: 9999
        }
    ],

    specialCases: [
        {
            description: 'same starting node',
            setup: () => {
                const shared = createLinkedList([1,2,3]);
                return { headA: shared, headB: shared, intersection: shared };
            },
            expectedVal: 1
        },
        {
            description: 'intersection at first node of shorter list',
            setup: () => {
                // Create shared intersection: [3,4,5]
                const intersection = createLinkedList([3,4,5]);
                // ListA: [1,2] -> [3,4,5]
                const headA = createLinkedList([1,2]);
                connectToTail(headA, intersection);
                // ListB starts at intersection
                const headB = intersection;
                return { headA, headB, intersection };
            },
            expectedVal: 3
        }
    ]
};

module.exports = { testData, ListNode };