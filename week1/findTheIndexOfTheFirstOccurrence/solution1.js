/**
 * KMP (Knuth-Morris-Pratt) algorithm for substring search
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') return 0;
  // Build the prefix table (lps array)
  const lps = new Array(needle.length).fill(0);
  let len = 0;
  for (let i = 1; i < needle.length; i++) {
    while (len > 0 && needle[i] !== needle[len]) {
      len = lps[len - 1];
    }
    if (needle[i] === needle[len]) {
      len++;
      lps[i] = len;
    }
  }
  // Search using the lps table
  let i = 0,
    j = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
      if (j === needle.length) return i - j;
    } else if (j > 0) {
      j = lps[j - 1];
    } else {
      i++;
    }
  }
  return -1;
};

module.exports = strStr;
