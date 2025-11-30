// Test data for Daily Temperatures problem
module.exports = [
  // Example 1
  {
    temperatures: [73, 74, 75, 71, 69, 72, 76, 73],
    expected: [1, 1, 4, 2, 1, 1, 0, 0],
  },
  // Example 2
  {
    temperatures: [30, 40, 50, 60],
    expected: [1, 1, 1, 0],
  },
  // Example 3
  {
    temperatures: [30, 60, 90],
    expected: [1, 1, 0],
  },
  // Edge cases
  {
    temperatures: [30],
    expected: [0],
  },
  {
    temperatures: [100, 99, 98],
    expected: [0, 0, 0],
  },
  {
    temperatures: [30, 30, 30],
    expected: [0, 0, 0],
  },
  {
    temperatures: [30, 35, 32, 40],
    expected: [1, 2, 1, 0],
  },
];