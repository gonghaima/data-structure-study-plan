/**
 * Test data for Binary Tree Right Side View
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
            description: 'LeetCode example 1 - right side view of mixed tree',
            input: new TreeNode(1,
                new TreeNode(2, null, new TreeNode(5)),
                new TreeNode(3, null, new TreeNode(4))
            ),
            expected: [1, 3, 4]
        },
        {
            description: 'LeetCode example 2 - deeper left subtree visible on right',
            input: new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(4, new TreeNode(5)),
                    null
                ),
                new TreeNode(3)
            ),
            expected: [1, 3, 4, 5]
        },
        {
            description: 'LeetCode example 3 - tree with only right child',
            input: new TreeNode(1, null, new TreeNode(3)),
            expected: [1, 3]
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
            description: 'Left skewed tree - left nodes visible',
            input: new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(3)
                )
            ),
            expected: [1, 2, 3]
        },
        {
            description: 'Right skewed tree - all nodes visible',
            input: new TreeNode(1,
                null,
                new TreeNode(2,
                    null,
                    new TreeNode(3)
                )
            ),
            expected: [1, 2, 3]
        }
    ],

    specialCases: [
        {
            description: 'Full binary tree - only rightmost nodes visible',
            input: new TreeNode(1,
                new TreeNode(2, new TreeNode(4), new TreeNode(5)),
                new TreeNode(3, new TreeNode(6), new TreeNode(7))
            ),
            expected: [1, 3, 7]
        },
        {
            description: 'Left subtree deeper than right - left node visible at deepest level',
            input: new TreeNode(1,
                new TreeNode(2,
                    null,
                    new TreeNode(4,
                        null,
                        new TreeNode(5)
                    )
                ),
                new TreeNode(3)
            ),
            expected: [1, 3, 4, 5]
        }
    ]
};

module.exports = testData;
