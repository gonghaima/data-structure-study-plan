/**
 * Brute Force Approach - Check all subarrays
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    let minLen = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum >= k) {
                minLen = Math.min(minLen, j - i + 1);
                break;
            }
        }
    }
    
    return minLen === Infinity ? -1 : minLen;
};

module.exports = shortestSubarray;