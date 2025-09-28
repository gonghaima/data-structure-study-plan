/**
 * Brute-force approach (O(n^2), not efficient)
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const n = nums.length;
  const answer = [];
  for (let i = 0; i < n; i++) {
    let prod = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) prod *= nums[j];
    }
    answer.push(prod);
  }
  return answer;
};

module.exports = productExceptSelf;
