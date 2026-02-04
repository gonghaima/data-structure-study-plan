// Solution 1: Sorting approach
// Time: O(n log n), Space: O(1) if sort in place
module.exports = function longestConsecutive(nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  let longest = 1;
  let current = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue; // skip duplicates
    if (nums[i] === nums[i - 1] + 1) {
      current++;
    } else {
      longest = Math.max(longest, current);
      current = 1;
    }
  }
  return Math.max(longest, current);
};
