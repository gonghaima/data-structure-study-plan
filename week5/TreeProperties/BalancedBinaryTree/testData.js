/**
 * Test data for Balanced Binary Tree
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
            description: 'LeetCode example 1 - balanced tree',
            input: new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))),
            expected: true
        },
        {
            description: 'LeetCode example 2 - unbalanced tree',
            input: new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(3, new TreeNode(4), new TreeNode(4)),
                    new TreeNode(3)
                ),
                new TreeNode(2)
            ),
            expected: false
        },
        {
            description: 'Single node tree',
            input: new TreeNode(1),
            expected: true
        }
    ],

    edgeCases: [
        {
            description: 'Empty tree',
            input: null,
            expected: true
        },
        {
            description: 'Left skewed tree with 3 nodes',
            input: new TreeNode(1, new TreeNode(2, new TreeNode(3))),
            expected: false
        },
        {
            description: 'Right skewed tree with 3 nodes',
            input: new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))),
            expected: false
        },
        {
            description: 'Two-level complete binary tree',
            input: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            expected: true
        }
    ],

    performanceTests: [
        {
            description: 'Large balanced tree',
            input: (() => {
                const build = (depth, maxDepth) => {
                    if (depth > maxDepth) return null;
                    return new TreeNode(depth, build(depth + 1, maxDepth), build(depth + 1, maxDepth));
                };
                return build(1, 12);
            })(),
            expected: true
        }
    ],

    specialCases: [
        {
            description: 'Height difference of exactly 1 - still balanced',
            input: new TreeNode(1,
                new TreeNode(2, new TreeNode(3), null),
                new TreeNode(4)
            ),
            expected: true
        },
        {
            description: 'Subtree unbalanced but root looks balanced',
            input: new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(3, new TreeNode(4), null),
                    null
                ),
                new TreeNode(5)
            ),
            expected: false
        }
    ]
};

module.exports = testData;
