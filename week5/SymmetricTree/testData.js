/**
 * Test data for Symmetric Tree
 * Organized by test categories for better maintainability
 */

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
            description: 'LeetCode example 1: symmetric tree [1,2,2,3,4,4,3]',
            input: new TreeNode(1,
                new TreeNode(2, new TreeNode(3), new TreeNode(4)),
                new TreeNode(2, new TreeNode(4), new TreeNode(3))
            ),
            expected: true
        },
        {
            description: 'LeetCode example 2: asymmetric tree [1,2,2,null,3,null,3]',
            input: new TreeNode(1,
                new TreeNode(2, null, new TreeNode(3)),
                new TreeNode(2, null, new TreeNode(3))
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
            description: 'Two nodes — left child only',
            input: new TreeNode(1, new TreeNode(2), null),
            expected: false
        },
        {
            description: 'Two nodes — right child only',
            input: new TreeNode(1, null, new TreeNode(2)),
            expected: false
        },
        {
            description: 'Symmetric with two levels',
            input: new TreeNode(1,
                new TreeNode(2),
                new TreeNode(2)
            ),
            expected: true
        },
        {
            description: 'Same structure but different values',
            input: new TreeNode(1,
                new TreeNode(2, new TreeNode(3), new TreeNode(4)),
                new TreeNode(2, new TreeNode(3), new TreeNode(4))
            ),
            expected: false
        }
    ],

    performanceTests: [
        {
            description: 'Large symmetric tree',
            input: (() => {
                const build = (depth, val) => {
                    if (depth === 0) return null;
                    return new TreeNode(val, build(depth - 1, val), build(depth - 1, val));
                };
                return build(10, 1);
            })(),
            expected: true
        }
    ],

    specialCases: [
        {
            description: 'Mirror structure but root children have swapped subtrees',
            input: new TreeNode(1,
                new TreeNode(2, new TreeNode(3), null),
                new TreeNode(2, null, new TreeNode(3))
            ),
            expected: true
        },
        {
            description: 'Deep asymmetry at leaf level',
            input: new TreeNode(1,
                new TreeNode(2, new TreeNode(3, new TreeNode(4), null), null),
                new TreeNode(2, null, new TreeNode(3, null, new TreeNode(5)))
            ),
            expected: false
        }
    ]
};

module.exports = testData;
