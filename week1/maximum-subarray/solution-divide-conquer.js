/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Divide and Conquer approach - O(n log n) time, O(log n) space
 * This is the follow-up solution mentioned in the problem
 */
var maxSubArrayDivideConquer = function(nums) {
    /**
     * Helper function to find maximum subarray using divide and conquer
     * @param {number[]} nums - input array
     * @param {number} left - left boundary (inclusive)
     * @param {number} right - right boundary (inclusive)
     * @return {number} maximum subarray sum in the range [left, right]
     */
    function divideConquer(nums, left, right) {
        // Base case: single element
        if (left === right) {
            return nums[left];
        }
        
        // Divide: find middle point
        const mid = Math.floor((left + right) / 2);
        
        // Conquer: recursively find max subarray in left and right halves
        const leftMax = divideConquer(nums, left, mid);
        const rightMax = divideConquer(nums, mid + 1, right);
        
        // Combine: find max subarray that crosses the middle
        const crossMax = findMaxCrossingSubarray(nums, left, mid, right);
        
        // Return maximum of the three possibilities
        return Math.max(leftMax, rightMax, crossMax);
    }
    
    /**
     * Find maximum subarray that crosses the middle point
     * @param {number[]} nums - input array
     * @param {number} left - left boundary
     * @param {number} mid - middle point
     * @param {number} right - right boundary
     * @return {number} maximum crossing subarray sum
     */
    function findMaxCrossingSubarray(nums, left, mid, right) {
        // Find maximum sum extending from mid to left
        let leftSum = -Infinity;
        let sum = 0;
        for (let i = mid; i >= left; i--) {
            sum += nums[i];
            leftSum = Math.max(leftSum, sum);
        }
        
        // Find maximum sum extending from mid+1 to right
        let rightSum = -Infinity;
        sum = 0;
        for (let i = mid + 1; i <= right; i++) {
            sum += nums[i];
            rightSum = Math.max(rightSum, sum);
        }
        
        // Return sum of both sides
        return leftSum + rightSum;
    }
    
    // Start the divide and conquer process
    return divideConquer(nums, 0, nums.length - 1);
};

module.exports = maxSubArrayDivideConquer;