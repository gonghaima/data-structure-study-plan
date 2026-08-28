/**
 * Test data for Binary Tree Zigzag Level Order Traversal
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
            description: 'Basic zigzag traversal from LeetCode example 1',
            input: new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))),
            expected: [[3], [20, 9], [15, 7]]
        },
        {
            description: 'Single node tree from LeetCode example 2',
            input: new TreeNode(1),
            expected: [[1]]
        },
        {
            description: 'Empty tree from LeetCode example 3',
            input: null,
            expected: []
        }
    ],

    edgeCases: [
        {
            description: 'Two level tree',
            input: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            expected: [[1], [3, 2]]
        },
        {
            description: 'Left skewed tree',
            input: new TreeNode(1, new TreeNode(2, new TreeNode(3))),
            expected: [[1], [2], [3]]
        },
        {
            description: 'Right skewed tree',
            input: new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))),
            expected: [[1], [2], [3]]
        },
        {
            description: 'Four level tree with zigzag pattern',
            input: (() => {
                const root = new TreeNode(1);
                root.left = new TreeNode(2);
                root.right = new TreeNode(3);
                root.left.left = new TreeNode(4);
                root.left.right = new TreeNode(5);
                root.right.left = new TreeNode(6);
                root.right.right = new TreeNode(7);
                root.left.left.left = new TreeNode(8);
                root.left.left.right = new TreeNode(9);
                return root;
            })(),
            expected: [[1], [3, 2], [4, 5, 6, 7], [9, 8]]
        }
    ],

    performanceTests: [
        {
            description: 'Large balanced tree',
            input: (() => {
                const createBalanced = (val, depth) => {
                    if (depth === 0) return null;
                    const root = new TreeNode(val);
                    root.left = createBalanced(val * 2, depth - 1);
                    root.right = createBalanced(val * 2 + 1, depth - 1);
                    return root;
                };
                return createBalanced(1, 5);
            })(),
            expected: (() => {
                // Expected output for balanced tree of depth 5
                return [
                    [1],
                    [3, 2],
                    [4, 5, 6, 7],
                    [15, 14, 13, 12, 11, 10, 9, 8],
                    [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
                ];
            })()
        }
    ],

    specialCases: [
        {
            description: 'Tree with negative values',
            input: new TreeNode(-3, new TreeNode(-9), new TreeNode(20, new TreeNode(-15), new TreeNode(7))),
            expected: [[-3], [20, -9], [-15, 7]]
        },
        {
            description: 'Tree with only left children at each level',
            input: (() => {
                const root = new TreeNode(1);
                root.left = new TreeNode(2);
                root.left.left = new TreeNode(3);
                root.left.left.left = new TreeNode(4);
                return root;
            })(),
            expected: [[1], [2], [3], [4]]
        }
    ]
};

module.exports = testData;
