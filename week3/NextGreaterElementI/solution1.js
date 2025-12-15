/**
 * Brute Force Approach
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const result = [];
    
    for (let i = 0; i < nums1.length; i++) {
        const target = nums1[i];
        let found = false;
        let nextGreater = -1;
        
        // Find target in nums2
        for (let j = 0; j < nums2.length; j++) {
            if (nums2[j] === target) {
                found = true;
            } else if (found && nums2[j] > target) {
                nextGreater = nums2[j];
                break;
            }
        }
        
        result.push(nextGreater);
    }
    
    return result;
};

module.exports = nextGreaterElement;