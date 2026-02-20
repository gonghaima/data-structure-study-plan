/**
 * Test data for Maximum Depth of Binary Tree
 * Organized by test categories for better maintainability
 */

// TreeNode definition for testing
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
            input: new TreeNode(3, 
                new TreeNode(9), 
                new TreeNode(20, new TreeNode(15), new TreeNode(7))
            ),
            expected: 3
        },
        {
            description: 'Basic case from LeetCode example 2',
            input: new TreeNode(1, null, new TreeNode(2)),
            expected: 2
        },
        {
            description: 'Single node tree',
            input: new TreeNode(1),
            expected: 1
        }
    ],

    edgeCases: [
        {
            description: 'Empty tree',
            input: null,
            expected: 0
        },
        {
            description: 'Left skewed tree',
            input: new TreeNode(1, new TreeNode(2, new TreeNode(3))),
            expected: 3
        },
        {
            description: 'Right skewed tree',
            input: new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))),
            expected: 3
        }
    ],

    performanceTests: [
        {
            description: 'Balanced tree with depth 4',
            input: new TreeNode(1,
                new TreeNode(2, new TreeNode(4), new TreeNode(5)),
                new TreeNode(3, new TreeNode(6), new TreeNode(7))
            ),
            expected: 3
        }
    ],

    specialCases: [
        {
            description: 'Unbalanced tree - left deeper',
            input: new TreeNode(1,
                new TreeNode(2, new TreeNode(3, new TreeNode(4))),
                new TreeNode(5)
            ),
            expected: 4
        },
        {
            description: 'Unbalanced tree - right deeper',
            input: new TreeNode(1,
                new TreeNode(2),
                new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5)))
            ),
            expected: 4
        }
    ]
};

module.exports = { testData, TreeNode };