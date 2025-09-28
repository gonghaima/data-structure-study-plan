/**
 * Division-based approach (for learning only, not allowed in interviews)
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const n = nums.length;
  const totalProduct = nums.reduce((acc, num) => acc * num, 1);
  const zeroCount = nums.filter(num => num === 0).length;
  if (zeroCount > 1) return new Array(n).fill(0);
  if (zeroCount === 1) {
    const product = nums.reduce((acc, num) => num === 0 ? acc : acc * num, 1);
    return nums.map(num => num === 0 ? product : 0);
  }
  return nums.map(num => totalProduct / num);
};

module.exports = productExceptSelf;
