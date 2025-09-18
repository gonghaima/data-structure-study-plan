/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // Kadane's Algorithm - O(n) time, O(1) space
    // Track current sum and maximum sum found so far
    
    let maxSum = nums[0];     // Initialize with first element
    let currentSum = nums[0]; // Current running sum
    
    // Iterate through array starting from second element
    for (let i = 1; i < nums.length; i++) {
        // Key insight: If current sum is negative, reset it
        // It's better to start fresh than to carry negative sum
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update maximum sum if current sum is better
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};

module.exports = maxSubArray;
