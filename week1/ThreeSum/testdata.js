// Test data for 3Sum problem
module.exports = [
  // Example 1
  {
    nums: [-1, 0, 1, 2, -1, -4],
    expected: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  // Example 2
  { nums: [0, 1, 1], expected: [] },
  // Example 3
  { nums: [0, 0, 0], expected: [[0, 0, 0]] },
  // Edge cases
  { nums: [0, 0, 0, 0], expected: [[0, 0, 0]] },
  {
    nums: [-2, 0, 1, 1, 2],
    expected: [
      [-2, 0, 2],
      [-2, 1, 1],
    ],
  },
  { nums: [], expected: [] },
  { nums: [1, 2, -2, -1], expected: [] },
  { nums: [-1, 0, 1, 0], expected: [[-1, 0, 1]] },
];
