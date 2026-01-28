// Test data for Top K Frequent Elements
// Example 1
exports.testCases = [
  {
    input: { nums: [1,1,1,2,2,3], k: 2 },
    output: [1,2]
  },
  // Example 2
  {
    input: { nums: [1], k: 1 },
    output: [1]
  },
  // Example 3
  {
    input: { nums: [1,2,1,2,1,2,3,1,3,2], k: 2 },
    output: [1,2]
  },
  // Additional cases
  {
    input: { nums: [4,4,4,4,5,5,6], k: 1 },
    output: [4]
  },
  {
    input: { nums: [7,8,9,7,8,7], k: 3 },
    output: [7,8,9]
  }
];
