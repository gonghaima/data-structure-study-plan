/**
 * 3Sum - Optimized Two Pointer Approach
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) excluding output array
 * 
 * This is an enhanced version of the classic two-pointer approach with
 * additional optimizations like early termination and better duplicate handling.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length;
  if (n < 3) return [];
  
  nums.sort((a, b) => a - b);
  const result = [];
  
  for (let i = 0; i < n - 2; i++) {
    // Early termination: if the smallest number is positive, no solution possible
    if (nums[i] > 0) break;
    
    // Skip duplicate values for first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1;
    let right = n - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        
        // Move both pointers and skip duplicates
        const leftVal = nums[left];
        const rightVal = nums[right];
        
        while (left < right && nums[left] === leftVal) left++;
        while (left < right && nums[right] === rightVal) right--;
        
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return result;
};

module.exports = threeSum;