// Test data for Product of Array Except Self
module.exports = [
  // Example 1
  { nums: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
  // Example 2
  { nums: [-1, 1, 0, -3, 3], expected: [0, 0, 9, 0, 0] },
  // Edge cases
  { nums: [2, 2], expected: [2, 2] },
  { nums: [0, 4, 0], expected: [0, 0, 0] },
  { nums: [0, 1, 2, 3], expected: [6, 0, 0, 0] },
  { nums: [5], expected: [1] }, // Not valid per constraints, but for robustness
  { nums: [1, 2], expected: [2, 1] },
  { nums: [3, 0, 2], expected: [0, 6, 0] },
  { nums: [1, -1, 1, -1], expected: [1, -1, 1, -1] },
];
