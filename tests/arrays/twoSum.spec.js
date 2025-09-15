const twoSum = require('../../src/arrays/twoSum');

describe('Two Sum - LeetCode #1', () => {
    test('should return indices of two numbers that add up to target', () => {
        // Test case 1: Basic case
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
        
        // Test case 2: Different positions
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
        
        // Test case 3: Same number twice
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
    
    test('should handle negative numbers', () => {
        expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
    });
    
    test('should handle zero', () => {
        expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
    });
    
    test('should handle large numbers', () => {
        expect(twoSum([1000000, 2000000, 3000000], 3000000)).toEqual([0, 1]);
    });
});