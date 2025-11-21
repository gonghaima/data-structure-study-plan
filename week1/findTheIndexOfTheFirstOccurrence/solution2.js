/**
 * Rabin-Karp algorithm for substring search
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') return 0;
  const n = haystack.length;
  const m = needle.length;
  if (m > n) return -1;
  const base = 256;
  const mod = 1e9 + 7;
  let needleHash = 0,
    windowHash = 0,
    highestBase = 1;
  for (let i = 0; i < m; i++) {
    needleHash = (needleHash * base + needle.charCodeAt(i)) % mod;
    windowHash = (windowHash * base + haystack.charCodeAt(i)) % mod;
    if (i < m - 1) highestBase = (highestBase * base) % mod;
  }
  for (let i = 0; i <= n - m; i++) {
    if (needleHash === windowHash) {
      if (haystack.substring(i, i + m) === needle) return i;
    }
    if (i < n - m) {
      windowHash =
        ((windowHash - haystack.charCodeAt(i) * highestBase) * base +
          haystack.charCodeAt(i + m)) %
        mod;
      if (windowHash < 0) windowHash += mod;
    }
  }
  return -1;
};

module.exports = strStr;
