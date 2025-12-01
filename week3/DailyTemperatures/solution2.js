/**
 * Array-based Approach (working backwards)
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = new Array(temperatures.length).fill(0);
  
  for (let i = temperatures.length - 2; i >= 0; i--) {
    let j = i + 1;
    while (j < temperatures.length && temperatures[j] <= temperatures[i]) {
      if (result[j] === 0) {
        j = temperatures.length;
      } else {
        j += result[j];
      }
    }
    if (j < temperatures.length) {
      result[i] = j - i;
    }
  }
  
  return result;
};

module.exports = dailyTemperatures;