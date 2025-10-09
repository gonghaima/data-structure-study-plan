/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (let i = 1; i <= s.length / 2; i++) {
    if (s.length % i === 0) {
      let sub = s.substring(0, i);
      let repeated = sub.repeat(s.length / i);
      if (repeated === s) return true;
    }
  }
  return false;
};
module.exports = repeatedSubstringPattern;
