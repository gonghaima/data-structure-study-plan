/**
 * Test data for Binary Tree Inorder Traversal
 * Organized by test categories for better maintainability
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function arrayToTree(arr) {
    if (!arr || arr.length === 0) return null;
    
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    
    while (queue.length > 0 && i < arr.length) {
        const node = queue.shift();
        
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    
    return root;
}

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: { root: arrayToTree([1, null, 2, 3]) },
            expected: [1, 3, 2]
        },
        {
            description: 'Basic case from LeetCode example 2',
            input: { root: arrayToTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]) },
            expected: [4, 2, 6, 5, 7, 1, 3, 9, 8]
        },
        {
            description: 'Basic case from LeetCode example 4',
            input: { root: arrayToTree([1]) },
            expected: [1]
        }
    ],

    edgeCases: [
        {
            description: 'Empty tree',
            input: { root: null },
            expected: []
        },
        {
            description: 'Single node tree',
            input: { root: new TreeNode(5) },
            expected: [5]
        },
        {
            description: 'Left-skewed tree',
            input: { root: arrayToTree([1, 2, null, 3, null, 4]) },
            expected: [4, 3, 2, 1]
        },
        {
            description: 'Right-skewed tree',
            input: { root: arrayToTree([1, null, 2, null, 3, null, 4]) },
            expected: [1, 2, 3, 4]
        }
    ],

    performanceTests: [
        {
            description: 'Large balanced tree (100 nodes)',
            input: { root: arrayToTree(Array.from({length: 100}, (_, i) => i)) },
            expected: Array.from({length: 100}, (_, i) => i)
        }
    ],

    specialCases: [
        {
            description: 'Tree with negative values',
            input: { root: arrayToTree([-1, -2, -3]) },
            expected: [-2, -1, -3]
        },
        {
            description: 'Tree with both positive and negative values',
            input: { root: arrayToTree([5, 3, 8, 1, 4, 7, 10]) },
            expected: [1, 3, 4, 5, 7, 8, 10]
        }
    ]
};

module.exports = testData;
