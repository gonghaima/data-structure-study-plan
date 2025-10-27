/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  if (b === '') return 1;
  if (a === '') return -1;
  let count = Math.ceil(b.length / a.length);
  let repeated = a.repeat(count);
  if (repeated.includes(b)) return count;
  repeated += a;
  if (repeated.includes(b)) return count + 1;
  return -1;
};

module.exports = repeatedStringMatch;
