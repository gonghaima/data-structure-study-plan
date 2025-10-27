// Test data for Repeated String Match
module.exports = [
  // Example 1
  { a: "abcd", b: "cdabcdab", expected: 3 },
  // Example 2
  { a: "a", b: "aa", expected: 2 },
  // Example 3
  { a: "a", b: "a", expected: 1 },
  // Example 4
  { a: "abc", b: "wxyz", expected: -1 },
  // Edge cases
  { a: "abc", b: "cabcabca", expected: 4 },
  { a: "abc", b: "bcabca", expected: 3 },
  { a: "abc", b: "cab", expected: 2 },
  { a: "abc", b: "abcabcabcabc", expected: 4 },
  { a: "abc", b: "", expected: 1 },
  { a: "", b: "a", expected: -1 },
];
