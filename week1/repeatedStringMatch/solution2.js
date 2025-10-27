/**
 * Rabin-Karp based approach for Repeated String Match
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
  if (b === '') return 1;
  if (a === '') return -1;
  let count = Math.ceil(b.length / a.length);
  let repeated = a.repeat(count);
  const base = 256, mod = 1e9 + 7;
  // Compute hash for b
  let bHash = 0, pow = 1;
  for (let i = 0; i < b.length; i++) {
    bHash = (bHash * base + b.charCodeAt(i)) % mod;
    if (i < b.length - 1) pow = (pow * base) % mod;
  }
  // Check repeated and repeated + a
  for (let k = 0; k < 2; k++) {
    let windowHash = 0;
    for (let i = 0; i < b.length; i++) {
      windowHash = (windowHash * base + repeated.charCodeAt(i)) % mod;
    }
    if (windowHash === bHash && repeated.slice(0, b.length) === b) return count + k;
    for (let i = b.length; i < repeated.length; i++) {
      windowHash = (windowHash - repeated.charCodeAt(i - b.length) * pow) % mod;
      windowHash = (windowHash + mod) % mod;
      windowHash = (windowHash * base + repeated.charCodeAt(i)) % mod;
      if (windowHash === bHash && repeated.slice(i - b.length + 1, i + 1) === b) return count + k;
    }
    repeated += a;
  }
  return -1;
};

module.exports = repeatedStringMatch;
