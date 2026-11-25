const sortedArrayToBST = require('./solution');
const testData = require('./testData');

// Helper function to collect the in-order traversal of a tree
function inorder(node, out = []) {
    if (!node) return out;
    inorder(node.left, out);
    out.push(node.val);
    inorder(node.right, out);
    return out;
}

// Helper function returning the tree height, or -1 if any subtree is unbalanced
function balancedHeight(node) {
    if (!node) return 0;
    const left = balancedHeight(node.left);
    if (left === -1) return -1;
    const right = balancedHeight(node.right);
    if (right === -1) return -1;
    if (Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
}

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
    testCases.forEach((testCase) => {
        const { description, input, expected } = testCase;

        test(`should ${description}`, () => {
            const root = sortedArrayToBST([...input.nums]);

            expect(root).not.toBeNull();
            expect(inorder(root)).toEqual(expected);
            expect(balancedHeight(root)).not.toBe(-1);
            expect(balancedHeight(root)).toBe(Math.ceil(Math.log2(expected.length + 1)));
        });
    });
}

describe('Convert Sorted Array to Binary Search Tree - LeetCode #108', () => {
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
