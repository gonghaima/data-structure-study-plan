/**
 * Test data for Binary Tree Paths
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: [1, 2, 3, null, 5],
            expected: ['1->2->5', '1->3']
        },
        {
            description: 'Single node tree',
            input: [1],
            expected: ['1']
        },
        {
            description: 'Balanced tree with multiple leaves',
            input: [1, 2, 3, 4, 5, 6, 7],
            expected: ['1->2->4', '1->2->5', '1->3->6', '1->3->7']
        }
    ],

    edgeCases: [
        {
            description: 'Left skewed tree',
            input: [1, 2, null, 3, null, 4],
            expected: ['1->2->3->4']
        },
        {
            description: 'Right skewed tree',
            input: [1, null, 2, null, 3],
            expected: ['1->2->3']
        },
        {
            description: 'Root with only left child',
            input: [1, 2],
            expected: ['1->2']
        },
        {
            description: 'Root with only right child',
            input: [1, null, 2],
            expected: ['1->2']
        }
    ],

    performanceTests: [
        {
            description: 'Deep tree with 100 nodes (max constraint)',
            input: (() => {
                const arr = [];
                for (let i = 1; i <= 100; i++) {
                    arr.push(i);
                    arr.push(null);
                }
                return arr;
            })(),
            expected: (() => {
                const path = [];
                for (let i = 1; i <= 100; i++) path.push(i);
                return [path.join('->')];
            })()
        }
    ],

    specialCases: [
        {
            description: 'Tree with negative values',
            input: [-1, -2, -3],
            expected: ['-1->-2', '-1->-3']
        },
        {
            description: 'Tree with duplicate values',
            input: [1, 1, 1],
            expected: ['1->1', '1->1']
        }
    ]
};

module.exports = testData;
