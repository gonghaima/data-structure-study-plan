/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // TODO: Implement your solution here
  // Hint: Use a stack to track indices of temperatures waiting for warmer days
  
  return new Array(temperatures.length).fill(0);
};

module.exports = dailyTemperatures;