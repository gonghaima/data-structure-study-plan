/**
 * 3Sum - No Sort Approach with Set
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 * 
 * This approach doesn't sort the array but uses a Set to track seen values
 * and another Set to avoid duplicate triplets. The triplets are normalized
 * by sorting them before adding to the result set.
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length;
  const resultSet = new Set();
  
  for (let i = 0; i < n - 2; i++) {
    const seen = new Set();
    
    for (let j = i + 1; j < n; j++) {
      const complement = -(nums[i] + nums[j]);
      
      if (seen.has(complement)) {
        // Create triplet and sort it to handle duplicates
        const triplet = [nums[i], nums[j], complement].sort((a, b) => a - b);
        resultSet.add(JSON.stringify(triplet));
      }
      
      seen.add(nums[j]);
    }
  }
  
  // Convert back to array of arrays and normalize -0 to 0
  return Array.from(resultSet).map(triplet => 
    JSON.parse(triplet).map(x => Object.is(x, -0) ? 0 : x)
  );
};

module.exports = threeSum;