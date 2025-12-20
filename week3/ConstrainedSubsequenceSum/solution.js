/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Uses monotonic deque to maintain sliding window maximum

// Most efficient approach for large inputs

var constrainedSubsetSum = function (nums, k) {
  const n = nums.length;
  const dp = new Array(n);
  const deque = [];

  for (let i = 0; i < n; i++) {
    while (deque.length && deque[0] < i - k) {
      deque.shift();
    }

    dp[i] = nums[i] + Math.max(0, deque.length ? dp[deque[0]] : 0);

    while (deque.length && dp[deque[deque.length - 1]] <= dp[i]) {
      deque.pop();
    }

    deque.push(i);
  }

  return Math.max(...dp);
};

module.exports = constrainedSubsetSum;
