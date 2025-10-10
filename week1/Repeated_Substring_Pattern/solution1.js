/**
 * String trick: (s + s).slice(1, -1) contains s
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  return (s + s).slice(1, -1).includes(s);
};

module.exports = repeatedSubstringPattern;
