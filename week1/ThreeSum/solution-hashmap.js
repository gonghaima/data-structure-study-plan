/**
 * 3Sum - HashMap Approach
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * 
 * For each pair (i, j), we look for the complement -(nums[i] + nums[j])
 * in a hash map. This reduces one loop but requires extra space.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const n = nums.length;
  
  // Sort to handle duplicates
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < n - 2; i++) {
    // Skip duplicate values for first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    const seen = new Set();
    const target = -nums[i];
    
    for (let j = i + 1; j < n; j++) {
      const complement = target - nums[j];
      
      if (seen.has(complement)) {
        result.push([nums[i], complement, nums[j]]);
        
        // Skip duplicates for second element
        while (j + 1 < n && nums[j] === nums[j + 1]) j++;
      }
      
      seen.add(nums[j]);
    }
  }
  
  // Normalize -0 to 0 in all triplets
  return result.map((triplet) =>
    triplet.map((x) => (Object.is(x, -0) ? 0 : x))
  );
};

module.exports = threeSum;