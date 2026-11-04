/**
 * Test data for Insert into a Binary Search Tree
 * Organized by test categories for better maintainability
 *
 * `input.tree` is a level-order array (null marks a missing child).
 * `expected` is the resulting tree after insertion, in nested-array form
 * [val, left, right] (recursively, with null for missing children).
 *
 * The problem allows any valid insertion point, but these fixtures assume
 * the standard approach of inserting the new value as a leaf by following
 * the BST comparison all the way down (the deterministic result produced
 * by every solution in this folder).
 */

const testData = {
    basicFunctionality: [
        {
            description: 'LeetCode example 1 - insert as the right child of a leaf',
            input: { tree: [4, 2, 7, 1, 3], val: 5 },
            expected: [4, [2, [1, null, null], [3, null, null]], [7, [5, null, null], null]]
        },
        {
            description: 'LeetCode example 2 - insert partway down the right subtree',
            input: { tree: [40, 20, 60, 10, 30, 50, 70], val: 25 },
            expected: [
                40,
                [20, [10, null, null], [30, [25, null, null], null]],
                [60, [50, null, null], [70, null, null]]
            ]
        }
    ],

    edgeCases: [
        {
            description: 'empty tree - the new node becomes the root',
            input: { tree: [], val: 5 },
            expected: [5, null, null]
        },
        {
            description: 'single node tree, insert a smaller value as the left child',
            input: { tree: [4], val: 2 },
            expected: [4, [2, null, null], null]
        },
        {
            description: 'single node tree, insert a larger value as the right child',
            input: { tree: [4], val: 7 },
            expected: [4, null, [7, null, null]]
        }
    ],

    performanceTests: [
        {
            description: 'deeper tree, insert lands as a new leaf several levels down',
            input: { tree: [5, 3, 8, 1, 4, 7, 9], val: 6 },
            expected: [
                5,
                [3, [1, null, null], [4, null, null]],
                [8, [7, [6, null, null], null], [9, null, null]]
            ]
        },
        {
            description: 'larger balanced tree, insert lands at the deepest level',
            input: {
                tree: [10, 5, 15, 3, 7, 12, 18, 1, 4, 6, 8, 11, 13, 16, 20],
                val: 2
            },
            expected: [
                10,
                [
                    5,
                    [3, [1, null, [2, null, null]], [4, null, null]],
                    [7, [6, null, null], [8, null, null]]
                ],
                [15, [12, [11, null, null], [13, null, null]], [18, [16, null, null], [20, null, null]]]
            ]
        }
    ],

    specialCases: [
        {
            description: 'insert the smallest value, becoming the leftmost leaf',
            input: { tree: [8, 4, 12, 2, 6, 10, 14], val: 1 },
            expected: [
                8,
                [4, [2, [1, null, null], null], [6, null, null]],
                [12, [10, null, null], [14, null, null]]
            ]
        },
        {
            description: 'insert the largest value, becoming the rightmost leaf',
            input: { tree: [8, 4, 12, 2, 6, 10, 14], val: 15 },
            expected: [
                8,
                [4, [2, null, null], [6, null, null]],
                [12, [10, null, null], [14, null, [15, null, null]]]
            ]
        },
        {
            description: 'insert value lands as a left child one level below the root',
            input: { tree: [4, 2, 7, 1, 3, 6, 8], val: 5 },
            expected: [
                4,
                [2, [1, null, null], [3, null, null]],
                [7, [6, [5, null, null], null], [8, null, null]]
            ]
        }
    ]
};

module.exports = testData;
