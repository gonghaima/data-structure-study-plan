const maxProfit = require('./solution');
const testData = require('./testData');

/**
 * Helper function to run test cases from data
 * @param {Array} testCases - Array of test case objects
 */
function runTestCases(testCases) {
    testCases.forEach(testCase => {
        const { description, input, expected } = testCase;
        const { prices } = input;
        
        test(`should ${description}`, () => {
            expect(maxProfit(prices)).toBe(expected);
        });
    });
}

describe('Best Time to Buy and Sell Stock - LeetCode #121', () => {
    describe('Basic functionality', () => {
        runTestCases(testData.basicFunctionality);
    });

    describe('Edge cases with different price patterns', () => {
        runTestCases(testData.edgeCasesWithDifferentPricePatterns);
    });

    describe('Complex scenarios', () => {
        runTestCases(testData.complexScenarios);
    });

    describe('Boundary conditions', () => {
        runTestCases(testData.boundaryConditions);
    });

    describe('Performance and large arrays', () => {
        runTestCases(testData.performanceAndLargeArrays);
    });

    describe('Mathematical correctness', () => {
        runTestCases(testData.mathematicalCorrectness);
        
        test('should ensure profit is non-negative', () => {
            const testCase = testData.mathematicalCorrectness[0];
            const result = maxProfit(testCase.input.prices);
            expect(result).toBeGreaterThanOrEqual(0);
        });

        test('should return 0 when no profit is possible', () => {
            const descendingPrices = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
            expect(maxProfit(descendingPrices)).toBe(0);
        });

        test('should handle single element array', () => {
            expect(maxProfit([42])).toBe(0);
        });
    });

    describe('Special cases', () => {
        runTestCases(testData.specialCases);
    });

    describe('Return value validation', () => {
        test('should return a number', () => {
            const result = maxProfit([1, 2, 3, 4, 5]);
            expect(typeof result).toBe('number');
        });

        test('should return integer value', () => {
            const result = maxProfit([1, 5, 3, 6, 4]);
            expect(Number.isInteger(result)).toBe(true);
        });

        test('should return non-negative value', () => {
            const result = maxProfit([7, 6, 4, 3, 1]);
            expect(result).toBeGreaterThanOrEqual(0);
        });

        test('should handle empty array gracefully', () => {
            // Note: According to constraints, array length >= 1, but good to test
            expect(() => maxProfit([])).not.toThrow();
        });
    });

    describe('Algorithm efficiency validation', () => {
        test('should handle moderately large arrays efficiently', () => {
            const largeArray = Array.from({length: 1000}, (_, i) => Math.sin(i) * 100 + 100);
            const startTime = Date.now();
            const result = maxProfit(largeArray);
            const endTime = Date.now();
            
            expect(typeof result).toBe('number');
            expect(result).toBeGreaterThanOrEqual(0);
            expect(endTime - startTime).toBeLessThan(100); // Should complete in reasonable time
        });

        test('should find optimal solution in worst case scenario', () => {
            // Worst case: minimum at end, maximum at beginning (but can't buy after sell)
            const worstCase = [1, ...Array.from({length: 98}, (_, i) => 1000 - i), 0];
            const result = maxProfit(worstCase);
            expect(result).toBe(999); // Buy at 1, sell at 1000
        });
    });

    describe('Constraint validation', () => {
        test('should handle minimum array length constraint', () => {
            // 1 <= prices.length
            expect(maxProfit([5])).toBe(0);
        });

        test('should handle price range constraints', () => {
            // 0 <= prices[i] <= 10^4
            expect(maxProfit([0, 10000])).toBe(10000);
            expect(maxProfit([10000, 0])).toBe(0);
        });

        test('should handle maximum array length efficiently', () => {
            // Test with large array (simulating 10^5 constraint)
            const maxLengthArray = Array.from({length: 10000}, (_, i) => i % 100);
            const result = maxProfit(maxLengthArray);
            expect(typeof result).toBe('number');
            expect(result).toBeGreaterThanOrEqual(0);
        });
    });
});