/**
 * Test data for Same Tree
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
            description: 'Identical trees from LeetCode example 1',
            p: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            q: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            expected: true
        },
        {
            description: 'Structurally different trees from LeetCode example 2',
            p: new TreeNode(1, new TreeNode(2)),
            q: new TreeNode(1, null, new TreeNode(2)),
            expected: false
        },
        {
            description: 'Same structure but different values from LeetCode example 3',
            p: new TreeNode(1, new TreeNode(2), new TreeNode(1)),
            q: new TreeNode(1, new TreeNode(1), new TreeNode(2)),
            expected: false
        }
    ],

    edgeCases: [
        {
            description: 'Both trees empty',
            p: null,
            q: null,
            expected: true
        },
        {
            description: 'One tree empty, the other not',
            p: new TreeNode(1),
            q: null,
            expected: false
        },
        {
            description: 'Single node trees with same value',
            p: new TreeNode(1),
            q: new TreeNode(1),
            expected: true
        },
        {
            description: 'Single node trees with different values',
            p: new TreeNode(1),
            q: new TreeNode(2),
            expected: false
        }
    ],

    performanceTests: [
        {
            description: 'Large identical balanced trees',
            p: (() => {
                const createBalanced = (start, end) => {
                    if (start > end) return null;
                    const mid = Math.floor((start + end) / 2);
                    return new TreeNode(mid, createBalanced(start, mid - 1), createBalanced(mid + 1, end));
                };
                return createBalanced(1, 1000);
            })(),
            q: (() => {
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
            description: 'Trees with minimum and maximum values matching',
            p: new TreeNode(0, new TreeNode(-10000), new TreeNode(10000)),
            q: new TreeNode(0, new TreeNode(-10000), new TreeNode(10000)),
            expected: true
        },
        {
            description: 'Deep left-skewed identical trees',
            p: new TreeNode(3, new TreeNode(2, new TreeNode(1))),
            q: new TreeNode(3, new TreeNode(2, new TreeNode(1))),
            expected: true
        },
        {
            description: 'Same values, mirrored structure',
            p: new TreeNode(1, new TreeNode(2), null),
            q: new TreeNode(1, null, new TreeNode(2)),
            expected: false
        }
    ]
};

module.exports = testData;
