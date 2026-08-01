/**
 * Test data for Subtree of Another Tree
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
            description: 'subRoot matches a subtree from LeetCode example 1',
            root: new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5)),
            subRoot: new TreeNode(4, new TreeNode(1), new TreeNode(2)),
            expected: true
        },
        {
            description: 'subRoot values match but structure differs from LeetCode example 2',
            root: new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))), new TreeNode(5)),
            subRoot: new TreeNode(4, new TreeNode(1), new TreeNode(2)),
            expected: false
        },
        {
            description: 'root and subRoot are identical trees',
            root: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            subRoot: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            expected: true
        }
    ],

    edgeCases: [
        {
            description: 'subRoot is a single leaf node present in root',
            root: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            subRoot: new TreeNode(2),
            expected: true
        },
        {
            description: 'subRoot value does not appear anywhere in root',
            root: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            subRoot: new TreeNode(4),
            expected: false
        },
        {
            description: 'root and subRoot are both single matching nodes',
            root: new TreeNode(1),
            subRoot: new TreeNode(1),
            expected: true
        },
        {
            description: 'root and subRoot are single nodes with different values',
            root: new TreeNode(1),
            subRoot: new TreeNode(2),
            expected: false
        }
    ],

    performanceTests: [
        {
            description: 'Large balanced root tree with a small matching subtree deep inside',
            root: (() => {
                const createBalanced = (start, end) => {
                    if (start > end) return null;
                    const mid = Math.floor((start + end) / 2);
                    return new TreeNode(mid, createBalanced(start, mid - 1), createBalanced(mid + 1, end));
                };
                return createBalanced(1, 1000);
            })(),
            subRoot: new TreeNode(1),
            expected: true
        }
    ],

    specialCases: [
        {
            description: 'subRoot matches values but appears with extra descendants (not an exact subtree)',
            root: new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3)),
            subRoot: new TreeNode(2),
            expected: false
        },
        {
            description: 'Trees with negative and boundary values matching exactly',
            root: new TreeNode(0, new TreeNode(-10000), new TreeNode(10000)),
            subRoot: new TreeNode(0, new TreeNode(-10000), new TreeNode(10000)),
            expected: true
        },
        {
            description: 'subRoot matches root value but with mismatched left/right placement',
            root: new TreeNode(1, new TreeNode(2), null),
            subRoot: new TreeNode(1, null, new TreeNode(2)),
            expected: false
        }
    ]
};

module.exports = testData;
