/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // Edge case: if array is empty or has only one element, no profit possible
    if (prices.length <= 1) {
        return 0;
    }
    
    // Track the minimum price seen so far (best day to buy)
    let minPrice = prices[0];
    // Track the maximum profit achievable so far
    let maxProfit = 0;
    
    // Single pass through the array starting from day 1
    for (let i = 1; i < prices.length; i++) {
        // If current price is lower than our minimum, update minimum buy price
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // Calculate profit if we sell today (current price - minimum price so far)
            const currentProfit = prices[i] - minPrice;
            // Update maximum profit if current profit is better
            maxProfit = Math.max(maxProfit, currentProfit);
        }
    }
    
    return maxProfit;
};

module.exports = maxProfit;
