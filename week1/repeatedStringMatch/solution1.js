/**
 * KMP-based approach for Repeated String Match
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
  // Handle edge cases: empty b or a
  if (b === '') return 1; // Empty b is always a substring
  if (a === '') return -1; // Can't form b from empty a

  // Build the LPS (Longest Prefix Suffix) array for b
  const lps = new Array(b.length).fill(0);
  for (let i = 1, len = 0; i < b.length; i++) {
    // If mismatch, fall back in the LPS array
    while (len > 0 && b[i] !== b[len]) len = lps[len - 1];
    // If match, extend the current prefix
    if (b[i] === b[len]) lps[i] = ++len;
  }

  // i: index in a, j: index in b, count: number of a repeats
  let i = 0, j = 0, count = 1;
  while (i < a.length) {
    if (a[i] === b[j]) {
      // Characters match, move both pointers
      i++; j++;
      // If we've matched all of b, return the repeat count
      if (j === b.length) return count;
    } else if (j > 0) {
      // Mismatch after some matches, use LPS to skip unnecessary comparisons
      j = lps[j - 1];
    } else {
      // No match, move a's pointer
      i++;
    }
    // If we've reached the end of a but not b, repeat a
    if (i === a.length && j < b.length) {
      i = 0;
      count++;
      // If count exceeds a reasonable bound, it's impossible
      if (count > Math.ceil((b.length + a.length) / a.length)) break;
    }
  }
  // If we exit the loop, b is not a substring of any repeat of a
  return -1;
};

module.exports = repeatedStringMatch;
