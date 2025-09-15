const maxProfit = require('../../src/arrays/bestTimeToBuyStock');

describe('Best Time to Buy and Sell Stock - LeetCode #121', () => {
    test('should return maximum profit from buying and selling stock', () => {
        // Test case 1: Basic profit case
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
        
        // Test case 2: No profit possible
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
        
        // Test case 3: Single day
        expect(maxProfit([1])).toBe(0);
        
        // Test case 4: Two days with profit
        expect(maxProfit([1, 5])).toBe(4);
    });
    
    test('should handle edge cases', () => {
        // Empty array
        expect(maxProfit([])).toBe(0);
        
        // All same prices
        expect(maxProfit([5, 5, 5, 5])).toBe(0);
        
        // Large price difference
        expect(maxProfit([1, 1000])).toBe(999);
    });
});