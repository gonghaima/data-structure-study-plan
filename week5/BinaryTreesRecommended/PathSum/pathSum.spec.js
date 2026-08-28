const hasPathSum = require('./solution1');
const testData = require('./testData');

// Helper function to build tree from array representation
function buildTree(arr) {
    if (!arr || arr.length === 0) return null;
    
    const root = { val: arr[0], left: null, right: null };
    const queue = [root];
    let i = 1;
    
    while (queue.length && i < arr.length) {
        const node = queue.shift();
        
        if (i < arr.length && arr[i] !== null) {
            node.left = { val: arr[i], left: null, right: null };
            queue.push(node.left);
        }
        i++;
        
        if (i < arr.length && arr[i] !== null) {
            node.right = { val: arr[i], left: null, right: null };
            queue.push(node.right);
        }
        i++;
    }
    
    return root;
}

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
    testCases.forEach((testCase) => {
        const { description, input, expected } = testCase;

        test(`should ${description}`, () => {
            const tree = buildTree(input.root);
            expect(hasPathSum(tree, input.targetSum)).toBe(expected);
        });
    });
}

describe('Path Sum - LeetCode #112', () => {
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