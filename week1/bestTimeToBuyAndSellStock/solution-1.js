/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let prevVal = prices[0];
  let profit = 0;

  prices.forEach((price) => {
    if (price > prevVal) {
      profit = Math.max(profit, price - prevVal);
    } else {
      prevVal = price;
    }
  });
  return profit;
};

module.exports = maxProfit;
