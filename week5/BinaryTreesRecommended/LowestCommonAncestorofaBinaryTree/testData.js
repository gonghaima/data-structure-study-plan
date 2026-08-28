/**
 * Test data for Lowest Common Ancestor of a Binary Tree
 * Organized by test categories for better maintainability
 */

// TreeNode helper for creating test trees
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
            description: 'Basic case from LeetCode example 1 - LCA of 5 and 1 is 3',
            input: {
                root: new TreeNode(3,
                    new TreeNode(5,
                        new TreeNode(6),
                        new TreeNode(2, new TreeNode(7), new TreeNode(4))
                    ),
                    new TreeNode(1, new TreeNode(0), new TreeNode(8))
                ),
                p: new TreeNode(5),
                q: new TreeNode(1)
            },
            expected: 3
        },
        {
            description: 'Basic case from LeetCode example 2 - LCA of 5 and 4 is 5',
            input: {
                root: new TreeNode(3,
                    new TreeNode(5,
                        new TreeNode(6),
                        new TreeNode(2, new TreeNode(7), new TreeNode(4))
                    ),
                    new TreeNode(1, new TreeNode(0), new TreeNode(8))
                ),
                p: new TreeNode(5),
                q: new TreeNode(4)
            },
            expected: 5
        },
        {
            description: 'Basic case from LeetCode example 3 - LCA of 1 and 2 is 1',
            input: {
                root: new TreeNode(1, new TreeNode(2), null),
                p: new TreeNode(1),
                q: new TreeNode(2)
            },
            expected: 1
        }
    ],

    edgeCases: [
        {
            description: 'Two node tree - root and child',
            input: {
                root: new TreeNode(1, new TreeNode(2), null),
                p: new TreeNode(1),
                q: new TreeNode(2)
            },
            expected: 1
        },
        {
            description: 'Both nodes are the same',
            input: {
                root: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
                p: new TreeNode(2),
                q: new TreeNode(2)
            },
            expected: 2
        }
    ],

    performanceTests: [
        {
            description: 'Deep tree with nodes at maximum depth',
            input: {
                root: new TreeNode(1,
                    new TreeNode(2,
                        new TreeNode(4, new TreeNode(8), new TreeNode(9)),
                        new TreeNode(5, new TreeNode(10), new TreeNode(11))
                    ),
                    new TreeNode(3,
                        new TreeNode(6, new TreeNode(12), new TreeNode(13)),
                        new TreeNode(7, new TreeNode(14), new TreeNode(15))
                    )
                ),
                p: new TreeNode(8),
                q: new TreeNode(15)
            },
            expected: 1
        }
    ],

    specialCases: [
        {
            description: 'LCA is one of the target nodes (ancestor relationship)',
            input: {
                root: new TreeNode(1,
                    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
                    new TreeNode(3)
                ),
                p: new TreeNode(2),
                q: new TreeNode(4)
            },
            expected: 2
        },
        {
            description: 'Nodes in different subtrees',
            input: {
                root: new TreeNode(1,
                    new TreeNode(2, new TreeNode(4), null),
                    new TreeNode(3, null, new TreeNode(5))
                ),
                p: new TreeNode(4),
                q: new TreeNode(5)
            },
            expected: 1
        }
    ]
};

module.exports = { testData, TreeNode };