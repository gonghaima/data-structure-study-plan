/**
 * Priority Queue Solution - O(n log k) time, O(k) space
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    const n = nums.length;
    const dp = new Array(n);
    const pq = [];
    
    dp[0] = nums[0];
    pq.push([dp[0], 0]);
    
    for (let i = 1; i < n; i++) {
        while (pq.length && pq[0][1] < i - k) {
            pq.shift();
        }
        
        dp[i] = nums[i] + pq[0][0];
        
        let j = pq.length - 1;
        while (j >= 0 && pq[j][0] <= dp[i]) {
            pq.pop();
            j--;
        }
        
        pq.push([dp[i], i]);
        pq.sort((a, b) => b[0] - a[0]);
    }
    
    return dp[n - 1];
};

module.exports = maxResult;