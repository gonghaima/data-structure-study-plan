// Solution: HashSet (Optimal)
// Time: O(n), Space: O(n)
module.exports = function longestConsecutive(nums) {
  // ...
  // Edge case: if the array is empty, return 0
  if (nums.length === 0) return 0;
  
  // Create a set to store unique numbers for O(1) access
  const numSet = new Set(nums);
  let longestStreak = 0;

  // Iterate through each number in the set
  for (const num of numSet) {
    // Check if it's the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Extend the streak
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      // Update the longest streak found
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};
