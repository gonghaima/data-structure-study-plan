/**
 * Brute Force DP Solution - O(nk) time, O(n) space
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    const n = nums.length;
    const dp = [...nums];
    
    for (let i = 1; i < n; i++) {
        for (let j = Math.max(0, i - k); j < i; j++) {
            dp[i] = Math.max(dp[i], nums[i] + dp[j]);
        }
    }
    
    return dp[n - 1];
};

module.exports = maxResult;