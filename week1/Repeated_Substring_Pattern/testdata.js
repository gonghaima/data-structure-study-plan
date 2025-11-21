// Test data for Repeated Substring Pattern
module.exports = [
  // Example 1
  { s: 'abab', expected: true },
  // Example 2
  { s: 'aba', expected: false },
  // Example 3
  { s: 'abcabcabcabc', expected: true },
  // Edge cases
  { s: 'a', expected: false },
  { s: 'aa', expected: true },
  { s: 'abcabcabc', expected: true },
  { s: 'abcdabcd', expected: true },
  { s: 'xyzxyzxyzxyz', expected: true },
  { s: 'xyzxy', expected: false },
  { s: 'zzzz', expected: true },
  { s: 'ababab', expected: true },
  { s: 'abac', expected: false },
  { s: 'abaaba', expected: true }, // "aba" twice
  { s: 'abcab', expected: false },
];
