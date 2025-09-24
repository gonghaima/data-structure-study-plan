/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sMap = new Map();
  for (let char of s) {
    sMap.set(char, (sMap.get(char) || 0) + 1);
  }
  for (let char of t) {
    if (!sMap.has(char)) return false;
    sMap.set(char, sMap.get(char) - 1);
    if (sMap.get(char) === 0) sMap.delete(char);
  }
  return sMap.size === 0;
};

module.exports = isAnagram;
