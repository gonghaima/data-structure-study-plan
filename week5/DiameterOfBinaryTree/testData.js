/**
 * Test data for Diameter of Binary Tree
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
            description: 'LeetCode example 1: [1,2,3,4,5] → diameter 3',
            input: new TreeNode(1,
                new TreeNode(2, new TreeNode(4), new TreeNode(5)),
                new TreeNode(3)
            ),
            expected: 3
        },
        {
            description: 'LeetCode example 2: [1,2] → diameter 1',
            input: new TreeNode(1, new TreeNode(2)),
            expected: 1
        },
        {
            description: 'Single node tree',
            input: new TreeNode(1),
            expected: 0
        }
    ],

    edgeCases: [
        {
            description: 'Empty tree',
            input: null,
            expected: 0
        },
        {
            description: 'Left skewed tree of 4 nodes',
            input: new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(3,
                        new TreeNode(4)
                    )
                )
            ),
            expected: 3
        },
        {
            description: 'Right skewed tree of 4 nodes',
            input: new TreeNode(1,
                null,
                new TreeNode(2,
                    null,
                    new TreeNode(3,
                        null,
                        new TreeNode(4)
                    )
                )
            ),
            expected: 3
        },
        {
            description: 'Diameter path does not pass through root',
            input: new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(4, new TreeNode(6), new TreeNode(7)),
                    new TreeNode(5)
                ),
                new TreeNode(3)
            ),
            expected: 4
        }
    ],

    performanceTests: [
        {
            description: 'Large balanced tree',
            input: (() => {
                const build = (depth) => {
                    if (depth === 0) return null;
                    return new TreeNode(depth, build(depth - 1), build(depth - 1));
                };
                return build(10);
            })(),
            expected: 18
        }
    ],

    specialCases: [
        {
            description: 'Two-level balanced tree',
            input: new TreeNode(1,
                new TreeNode(2),
                new TreeNode(3)
            ),
            expected: 2
        },
        {
            description: 'Unbalanced tree where longer path is left-left to right',
            input: new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(3)
                ),
                new TreeNode(4,
                    null,
                    new TreeNode(5,
                        null,
                        new TreeNode(6)
                    )
                )
            ),
            expected: 4
        }
    ]
};

module.exports = testData;
