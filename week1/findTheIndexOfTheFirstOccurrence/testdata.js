// Test data for Find the Index of the First Occurrence in a String
module.exports = [
  // Example 1
  { haystack: 'sadbutsad', needle: 'sad', expected: 0 },
  // Example 2
  { haystack: 'leetcode', needle: 'leeto', expected: -1 },
  // Edge cases
  { haystack: 'a', needle: 'a', expected: 0 },
  { haystack: 'a', needle: 'b', expected: -1 },
  { haystack: 'mississippi', needle: 'issip', expected: 4 },
  { haystack: 'mississippi', needle: 'issi', expected: 1 },
  { haystack: 'hello', needle: 'll', expected: 2 },
  { haystack: 'aaaaa', needle: 'bba', expected: -1 },
  { haystack: '', needle: '', expected: 0 },
  { haystack: 'abc', needle: '', expected: 0 },
  { haystack: '', needle: 'a', expected: -1 },
];
