/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Uses monotonic deque to maintain sliding window maximum
// Most efficient approach for large inputs

var maxResult = function (nums, k) {
  const n = nums.length;
  const dp = new Array(n);
  const deque = [];

  dp[0] = nums[0];

  deque.push(0);

  for (let i = 1; i < n; i++) {
    while (deque.length && deque[0] < i - k) {
      deque.shift();
    }

    dp[i] = nums[i] + dp[deque[0]];

    while (deque.length && dp[deque[deque.length - 1]] <= dp[i]) {
      deque.pop();
    }

    deque.push(i);
  }

  return dp[n - 1];
};

module.exports = maxResult;
