/**
 * 3Sum - Divide and Conquer Approach
 * Time Complexity: O(n^2 log n)
 * Space Complexity: O(log n) for recursion stack
 * 
 * This approach divides the problem into smaller subproblems.
 * For each element, it finds all pairs in the remaining array that sum to the negative of that element.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  return threeSumHelper(nums, 0, []);
};

function threeSumHelper(nums, start, result) {
  const n = nums.length;
  
  for (let i = start; i < n - 2; i++) {
    // Skip duplicates
    if (i > start && nums[i] === nums[i - 1]) continue;
    
    // Find all pairs that sum to -nums[i]
    const pairs = twoSum(nums, i + 1, -nums[i]);
    
    // Add current number to each pair to form triplets
    for (const pair of pairs) {
      result.push([nums[i], ...pair]);
    }
  }
  
  return result;
}

function twoSum(nums, start, target) {
  const pairs = [];
  let left = start;
  let right = nums.length - 1;
  
  while (left < right) {
    const sum = nums[left] + nums[right];
    
    if (sum === target) {
      pairs.push([nums[left], nums[right]]);
      
      // Skip duplicates
      const leftVal = nums[left];
      const rightVal = nums[right];
      while (left < right && nums[left] === leftVal) left++;
      while (left < right && nums[right] === rightVal) right--;
      
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return pairs;
}

module.exports = threeSum;