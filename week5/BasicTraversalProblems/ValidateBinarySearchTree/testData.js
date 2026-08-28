/**
 * Test data for Validate Binary Search Tree
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
            description: 'Basic valid BST from LeetCode example 1',
            input: new TreeNode(2, new TreeNode(1), new TreeNode(3)),
            expected: true
        },
        {
            description: 'Basic invalid BST from LeetCode example 2',
            input: new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6))),
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
            description: 'Left skewed valid BST',
            input: new TreeNode(3, new TreeNode(2, new TreeNode(1))),
            expected: true
        },
        {
            description: 'Right skewed valid BST',
            input: new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))),
            expected: true
        },
        {
            description: 'Invalid BST - right child less than root',
            input: new TreeNode(2, new TreeNode(1), new TreeNode(1)),
            expected: false
        }
    ],

    performanceTests: [
        {
            description: 'Large balanced BST',
            input: (() => {
                // Create a large balanced tree
                const createBalanced = (start, end) => {
                    if (start > end) return null;
                    const mid = Math.floor((start + end) / 2);
                    return new TreeNode(mid, createBalanced(start, mid - 1), createBalanced(mid + 1, end));
                };
                return createBalanced(1, 1000);
            })(),
            expected: true
        }
    ],

    specialCases: [
        {
            description: 'BST with minimum and maximum values',
            input: new TreeNode(0, new TreeNode(-2147483648), new TreeNode(2147483647)),
            expected: true
        },
        {
            description: 'Invalid BST - left subtree has greater value',
            input: new TreeNode(2, new TreeNode(3), new TreeNode(1)),
            expected: false
        }
    ]
};

module.exports = testData;