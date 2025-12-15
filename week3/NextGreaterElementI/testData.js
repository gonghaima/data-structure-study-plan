/**
 * Test data for Next Greater Element I
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: { nums1: [4,1,2], nums2: [1,3,4,2] },
            expected: [-1,3,-1]
        },
        {
            description: 'Basic case from LeetCode example 2',
            input: { nums1: [2,4], nums2: [1,2,3,4] },
            expected: [3,-1]
        },
        {
            description: 'Single element arrays',
            input: { nums1: [1], nums2: [1] },
            expected: [-1]
        }
    ],

    edgeCases: [
        {
            description: 'All elements have next greater element',
            input: { nums1: [1,2], nums2: [1,2,3] },
            expected: [2,3]
        },
        {
            description: 'No elements have next greater element',
            input: { nums1: [3,2,1], nums2: [3,2,1] },
            expected: [-1,-1,-1]
        },
        {
            description: 'nums1 is same as nums2',
            input: { nums1: [1,3,4,2], nums2: [1,3,4,2] },
            expected: [3,4,-1,-1]
        }
    ],

    performanceTests: [
        {
            description: 'Large arrays with ascending order',
            input: { 
                nums1: Array.from({length: 100}, (_, i) => i + 1),
                nums2: Array.from({length: 1000}, (_, i) => i + 1)
            },
            expected: Array.from({length: 100}, (_, i) => i + 2)
        }
    ],

    specialCases: [
        {
            description: 'Decreasing sequence in nums2',
            input: { nums1: [5,3,1], nums2: [5,4,3,2,1] },
            expected: [-1,-1,-1]
        },
        {
            description: 'Mixed pattern with duplicates at boundaries',
            input: { nums1: [1,5], nums2: [1,2,3,4,5] },
            expected: [2,-1]
        }
    ]
};

module.exports = testData;