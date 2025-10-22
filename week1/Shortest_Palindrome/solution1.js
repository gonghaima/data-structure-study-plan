/**
 * KMP-based approach for Shortest Palindrome
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  // Reverse the input string
  const rev = s.split('').reverse().join('');
  // Concatenate original, a separator, and reversed string
  const concat = s + '#' + rev;
  // Prepare the LPS (Longest Prefix Suffix) array for KMP
  const lps = new Array(concat.length).fill(0);
  // Build the LPS array
  for (let i = 1, len = 0; i < concat.length; i++) {
    // If mismatch, fall back in the LPS array
    while (len > 0 && concat[i] !== concat[len]) {
      len = lps[len - 1];
    }
    // If match, extend the current prefix
    if (concat[i] === concat[len]) {
      len++;
      lps[i] = len;
    }
  }
  // The length of the longest palindromic prefix is lps[concat.length - 1]
  // The rest (not part of the prefix) must be added in front (from the reversed string)
  const toAdd = rev.substring(0, s.length - lps[concat.length - 1]);
  // Prepend the necessary characters to make the shortest palindrome
  return toAdd + s;
};

module.exports = shortestPalindrome;
