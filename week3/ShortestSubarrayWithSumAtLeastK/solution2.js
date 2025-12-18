/**
 * Optimal Deque Approach - Monotonic deque with prefix sums
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const n = nums.length;
    const prefixSum = new Array(n + 1).fill(0);
    
    // Calculate prefix sums
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }
    
    const deque = [];
    let minLen = Infinity;
    
    for (let i = 0; i <= n; i++) {
        // Check if we can form a valid subarray
        while (deque.length > 0 && prefixSum[i] - prefixSum[deque[0]] >= k) {
            minLen = Math.min(minLen, i - deque.shift());
        }
        
        // Maintain monotonic increasing deque
        while (deque.length > 0 && prefixSum[i] <= prefixSum[deque[deque.length - 1]]) {
            deque.pop();
        }
        
        deque.push(i);
    }
    
    return minLen === Infinity ? -1 : minLen;
};

module.exports = shortestSubarray;