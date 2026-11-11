/**
 * Test data for Delete Node in a BST
 * Organized by test categories for better maintainability
 *
 * `input.tree` is a level-order array (null marks a missing child).
 * `expected` is the resulting tree after deletion, in nested-array form
 * [val, left, right] (recursively, with null for missing children), or
 * null if the tree is empty after deletion.
 *
 * A node with two children can be deleted in more than one valid way; these
 * fixtures assume the standard approach of replacing the deleted node's
 * value with its in-order successor (the minimum of its right subtree) and
 * then removing that successor from the right subtree - the deterministic
 * result produced by every solution in this folder.
 */

const testData = {
    basicFunctionality: [
        {
            description: 'LeetCode example 1 - delete a node with two children',
            input: { tree: [5, 3, 6, 2, 4, null, 7], key: 3 },
            expected: [5, [4, [2, null, null], null], [6, null, [7, null, null]]]
        },
        {
            description: 'LeetCode example 2 - key not found, tree unchanged',
            input: { tree: [5, 3, 6, 2, 4, null, 7], key: 0 },
            expected: [5, [3, [2, null, null], [4, null, null]], [6, null, [7, null, null]]]
        }
    ],

    edgeCases: [
        {
            description: 'empty tree - nothing to delete',
            input: { tree: [], key: 0 },
            expected: null
        },
        {
            description: 'single node tree, deleting the only node empties the tree',
            input: { tree: [5], key: 5 },
            expected: null
        },
        {
            description: 'single node tree, key not found, tree unchanged',
            input: { tree: [5], key: 3 },
            expected: [5, null, null]
        }
    ],

    specialCases: [
        {
            description: 'delete a leaf node',
            input: { tree: [5, 3, 6, 2, 4, null, 7], key: 2 },
            expected: [5, [3, null, [4, null, null]], [6, null, [7, null, null]]]
        },
        {
            description: 'delete a node that only has a left child',
            input: { tree: [5, 3, 6, 2, null, null, 7], key: 3 },
            expected: [5, [2, null, null], [6, null, [7, null, null]]]
        },
        {
            description: 'delete a node that only has a right child',
            input: { tree: [5, 3, 6, null, 4, null, 7], key: 3 },
            expected: [5, [4, null, null], [6, null, [7, null, null]]]
        }
    ],

    performanceTests: [
        {
            description: 'delete the root node, which has two children',
            input: { tree: [5, 3, 6, 2, 4, null, 7], key: 5 },
            expected: [6, [3, [2, null, null], [4, null, null]], [7, null, null]]
        },
        {
            description: 'larger tree, delete a node with two children several levels down',
            input: {
                tree: [10, 5, 15, 3, 7, 12, 18, 1, 4, 6, 8, 11, 13, 16, 20],
                key: 5
            },
            expected: [
                10,
                [6, [3, [1, null, null], [4, null, null]], [7, null, [8, null, null]]],
                [15, [12, [11, null, null], [13, null, null]], [18, [16, null, null], [20, null, null]]]
            ]
        }
    ]
};

module.exports = testData;
