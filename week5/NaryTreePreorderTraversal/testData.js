/**
 * Test data for N-ary Tree Preorder Traversal
 * Organized by test categories for better maintainability
 */

// Node definition for N-ary tree testing
class Node {
    constructor(val, children) {
        this.val = (val === undefined ? 0 : val);
        this.children = (children === undefined ? [] : children);
    }
}

const testData = {
    basicFunctionality: [
        {
            // Tree: root=1, children=[3,2,4], 3's children=[5,6]
            description: 'LeetCode example 1: root = [1,null,3,2,4,null,5,6]',
            input: new Node(1, [
                new Node(3, [new Node(5), new Node(6)]),
                new Node(2),
                new Node(4)
            ]),
            expected: [1, 3, 5, 6, 2, 4]
        },
        {
            // Tree from LeetCode example 2
            // root=1, children=[2,3,4,5]
            // 2's children=[], 3's children=[6,7], 4's children=[8], 5's children=[9,10]
            // 7's children=[11], 8's children=[12], 9's children=[13], 11's children=[14]
            description: 'LeetCode example 2: deeper N-ary tree',
            input: new Node(1, [
                new Node(2),
                new Node(3, [
                    new Node(6),
                    new Node(7, [new Node(11, [new Node(14)])])
                ]),
                new Node(4, [new Node(8, [new Node(12)])]),
                new Node(5, [new Node(9, [new Node(13)]), new Node(10)])
            ]),
            expected: [1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10]
        },
        {
            description: 'Single node tree',
            input: new Node(1),
            expected: [1]
        }
    ],

    edgeCases: [
        {
            description: 'Empty tree (null root)',
            input: null,
            expected: []
        },
        {
            description: 'Root with one child',
            input: new Node(1, [new Node(2)]),
            expected: [1, 2]
        },
        {
            description: 'Flat tree - root with many children, no grandchildren',
            input: new Node(1, [new Node(2), new Node(3), new Node(4), new Node(5)]),
            expected: [1, 2, 3, 4, 5]
        },
        {
            description: 'Linear chain - each node has exactly one child',
            input: new Node(1, [new Node(2, [new Node(3, [new Node(4)])])]),
            expected: [1, 2, 3, 4]
        }
    ],

    performanceTests: [
        {
            description: 'Wide tree with many children at each level',
            input: (() => {
                const children = Array.from({ length: 100 }, (_, i) =>
                    new Node(i + 2, Array.from({ length: 10 }, (_, j) => new Node((i + 2) * 100 + j)))
                );
                return new Node(1, children);
            })(),
            expected: (() => {
                const result = [1];
                for (let i = 0; i < 100; i++) {
                    result.push(i + 2);
                    for (let j = 0; j < 10; j++) {
                        result.push((i + 2) * 100 + j);
                    }
                }
                return result;
            })()
        }
    ],

    specialCases: [
        {
            description: 'Node with val 0',
            input: new Node(0, [new Node(0), new Node(0)]),
            expected: [0, 0, 0]
        },
        {
            description: 'Two-level tree with varying child counts',
            input: new Node(1, [
                new Node(2, [new Node(5), new Node(6), new Node(7)]),
                new Node(3),
                new Node(4, [new Node(8)])
            ]),
            expected: [1, 2, 5, 6, 7, 3, 4, 8]
        }
    ]
};

module.exports = { testData, Node };
