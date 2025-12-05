/**
 * Brute force solution: O(n*k)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  const res = [];
  for (let i = 0; i <= nums.length - k; i++) {
    let max = nums[i];
    for (let j = i; j < i + k; j++) {
      if (nums[j] > max) max = nums[j];
    }
    res.push(max);
  }
  return res;
}

module.exports = maxSlidingWindow;
