/**
 * KMP (Knuth-Morris-Pratt) based solution
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const n = s.length;
  const lps = new Array(n).fill(0);
  let len = 0;
  for (let i = 1; i < n; i++) {
    while (len > 0 && s[i] !== s[len]) {
      len = lps[len - 1];
    }
    if (s[i] === s[len]) {
      len++;
      lps[i] = len;
    }
  }
  // If there is a proper prefix which is also a suffix
  // and the string can be constructed by repeating a substring
  const patternLen = n - lps[n - 1];
  return lps[n - 1] > 0 && n % patternLen === 0;
};

module.exports = repeatedSubstringPattern;
