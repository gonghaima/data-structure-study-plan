/**
 * Test data for Binary Tree Preorder Traversal
 * Organized by test categories for better maintainability
 */

// TreeNode definition for test cases
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: new TreeNode(1, null, new TreeNode(2, new TreeNode(3))),
            expected: [1, 2, 3]
        },
        {
            description: 'Basic case from LeetCode example 2',
            input: new TreeNode(1, 
                new TreeNode(2, 
                    new TreeNode(4), 
                    new TreeNode(5, new TreeNode(6), new TreeNode(7))
                ),
                new TreeNode(3, null, new TreeNode(8, new TreeNode(9)))
            ),
            expected: [1, 2, 4, 5, 6, 7, 3, 8, 9]
        }
    ],

    edgeCases: [
        {
            description: 'Empty tree',
            input: null,
            expected: []
        },
        {
            description: 'Single node tree',
            input: new TreeNode(1),
            expected: [1]
        },
        {
            description: 'Left skewed tree',
            input: new TreeNode(1, new TreeNode(2, new TreeNode(3))),
            expected: [1, 2, 3]
        },
        {
            description: 'Right skewed tree',
            input: new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))),
            expected: [1, 2, 3]
        }
    ],

    performanceTests: [
        {
            description: 'Complete binary tree with 7 nodes',
            input: new TreeNode(1,
                new TreeNode(2, new TreeNode(4), new TreeNode(5)),
                new TreeNode(3, new TreeNode(6), new TreeNode(7))
            ),
            expected: [1, 2, 4, 5, 3, 6, 7]
        }
    ],

    specialCases: [
        {
            description: 'Tree with negative values',
            input: new TreeNode(-10, new TreeNode(-5), new TreeNode(-3)),
            expected: [-10, -5, -3]
        },
        {
            description: 'Tree with duplicate values',
            input: new TreeNode(1, new TreeNode(1), new TreeNode(1)),
            expected: [1, 1, 1]
        }
    ]
};

module.exports = testData;