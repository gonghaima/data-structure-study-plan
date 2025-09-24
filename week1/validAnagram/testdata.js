// Test data for Valid Anagram problem
module.exports = [
  // Example 1
  { s: "anagram", t: "nagaram", expected: true },
  // Example 2
  { s: "rat", t: "car", expected: false },
  // Edge cases
  { s: "a", t: "a", expected: true },
  { s: "a", t: "b", expected: false },
  { s: "", t: "", expected: true },
  { s: "abc", t: "cba", expected: true },
  { s: "abc", t: "ab", expected: false },
  { s: "aabbcc", t: "abcabc", expected: true },
  { s: "aabbcc", t: "aabbc", expected: false },
  { s: "listen", t: "silent", expected: true },
  { s: "triangle", t: "integral", expected: true },
  { s: "apple", t: "papel", expected: true },
  { s: "apple", t: "pale", expected: false }
];
