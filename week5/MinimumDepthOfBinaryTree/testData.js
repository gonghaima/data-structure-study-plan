/**
 * Test data for Minimum Depth of Binary Tree
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
            expected: 2
        },
        {
            description: 'LeetCode example 2 - right skewed tree',
            input: new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6))))),
            expected: 5
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
            description: 'Tree where only left child exists at root',
            input: new TreeNode(1, new TreeNode(2)),
            expected: 2
        },
        {
            description: 'Tree where only right child exists at root',
            input: new TreeNode(1, null, new TreeNode(2)),
            expected: 2
        }
    ],

    performanceTests: [
        {
            description: 'Large balanced tree',
            input: (() => {
                const buildBalanced = (depth, maxDepth) => {
                    if (depth > maxDepth) return null;
                    return new TreeNode(depth, buildBalanced(depth + 1, maxDepth), buildBalanced(depth + 1, maxDepth));
                };
                return buildBalanced(1, 15);
            })(),
            expected: 15
        }
    ],

    specialCases: [
        {
            description: 'Tree with one leaf on left, deep right subtree',
            input: new TreeNode(1, new TreeNode(2), new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5)))),
            expected: 2
        },
        {
            description: 'Two-level complete binary tree',
            input: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            expected: 2
        }
    ]
};

module.exports = testData;
