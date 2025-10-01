/**
 * 3Sum - Brute Force Approach
 * Time Complexity: O(n^3)
 * Space Complexity: O(1) excluding output array
 * 
 * This is the most straightforward approach but least efficient.
 * Uses three nested loops to check all possible triplets.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const n = nums.length;
  
  // Sort to handle duplicates easily
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < n - 2; i++) {
    // Skip duplicate values for first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    for (let j = i + 1; j < n - 1; j++) {
      // Skip duplicate values for second element
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      
      for (let k = j + 1; k < n; k++) {
        // Skip duplicate values for third element
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;
        
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  
  return result;
};

module.exports = threeSum;