const lowestCommonAncestor = require('./solution');
const { testData, TreeNode } = require('./testData');

/**
 * Helper function to find node by value in tree
 */
function findNode(root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) || findNode(root.right, val);
}

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
    testCases.forEach((testCase) => {
        const { description, input, expected } = testCase;

        test(`should ${description}`, () => {
            const { root, p, q } = input;
            const pNode = findNode(root, p.val);
            const qNode = findNode(root, q.val);
            const result = lowestCommonAncestor(root, pNode, qNode);
            expect(result.val).toBe(expected);
        });
    });
}

describe('Lowest Common Ancestor of a Binary Tree - LeetCode #236', () => {
    describe('Basic functionality', () => {
        runTestCases(testData.basicFunctionality);
    });

    describe('Edge cases', () => {
        runTestCases(testData.edgeCases);
    });

    describe('Performance tests', () => {
        runTestCases(testData.performanceTests);
    });

    describe('Special cases', () => {
        runTestCases(testData.specialCases);
    });
});