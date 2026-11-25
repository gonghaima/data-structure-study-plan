/**
 * Test data for Convert Sorted Array to Binary Search Tree
 * Organized by test categories for better maintainability
 *
 * `input.nums` is the strictly increasing input array.
 * `expected` is the in-order traversal of the resulting tree.
 *
 * The problem accepts ANY height-balanced BST built from `nums` (e.g. picking
 * the left-middle or right-middle element as root both pass), so the spec
 * does not compare exact shapes. Instead it verifies that:
 *   1. the in-order traversal equals `expected` (valid BST with every value),
 *   2. the tree is height-balanced (subtree depths differ by at most 1).
 */

const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

const testData = {
    basicFunctionality: [
        {
            description: 'LeetCode example 1 - five elements with negatives',
            input: { nums: [-10, -3, 0, 5, 9] },
            expected: [-10, -3, 0, 5, 9]
        },
        {
            description: 'LeetCode example 2 - two elements',
            input: { nums: [1, 3] },
            expected: [1, 3]
        },
        {
            description: 'odd length array - a single exact middle exists',
            input: { nums: [1, 2, 3, 4, 5, 6, 7] },
            expected: [1, 2, 3, 4, 5, 6, 7]
        }
    ],

    edgeCases: [
        {
            description: 'single element - becomes a lone root',
            input: { nums: [42] },
            expected: [42]
        },
        {
            description: 'three elements - perfect tree of height 2',
            input: { nums: [-1, 0, 1] },
            expected: [-1, 0, 1]
        },
        {
            description: 'boundary values from the constraints',
            input: { nums: [-10000, 10000] },
            expected: [-10000, 10000]
        }
    ],

    performanceTests: [
        {
            description: 'handle 1,000 elements and stay balanced',
            input: { nums: range(1, 1000) },
            expected: range(1, 1000)
        },
        {
            description: 'handle the maximum 10,000 elements and stay balanced',
            input: { nums: range(-5000, 4999) },
            expected: range(-5000, 4999)
        }
    ],

    specialCases: [
        {
            description: 'even length array - two candidate middles',
            input: { nums: [1, 2, 3, 4, 5, 6] },
            expected: [1, 2, 3, 4, 5, 6]
        },
        {
            description: 'all negative values',
            input: { nums: [-9, -7, -5, -3, -1] },
            expected: [-9, -7, -5, -3, -1]
        },
        {
            description: 'non-contiguous gaps between values',
            input: { nums: [-100, -20, 0, 3, 50, 999, 10000] },
            expected: [-100, -20, 0, 3, 50, 999, 10000]
        },
        {
            description: 'length one less than a power of two - perfect tree',
            input: { nums: range(1, 15) },
            expected: range(1, 15)
        }
    ]
};

module.exports = testData;
