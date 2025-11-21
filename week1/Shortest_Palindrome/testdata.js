// Test data for Shortest Palindrome
module.exports = [
  // Example 1
  { s: 'aacecaaa', expected: 'aaacecaaa' },
  // Example 2
  { s: 'abcd', expected: 'dcbabcd' },
  // Edge cases
  { s: '', expected: '' },
  { s: 'a', expected: 'a' },
  { s: 'aa', expected: 'aa' },
  { s: 'ab', expected: 'bab' },
  { s: 'aba', expected: 'aba' },
  { s: 'abcba', expected: 'abcba' },
  { s: 'abb', expected: 'bbabb' },
  { s: 'aabba', expected: 'abbaabba' },
  { s: 'race', expected: 'ecarace' },
  { s: 'aacecaaa', expected: 'aaacecaaa' },
];
