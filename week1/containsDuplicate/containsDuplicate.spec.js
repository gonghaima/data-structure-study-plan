const containsDuplicate = require('./solution');
const testData = require('./testData');

/**
 * Helper function to run test cases from data
 * @param {Array} testCases - Array of test case objects
 */
function runTestCases(testCases) {
    testCases.forEach(testCase => {
        const { description, input, expected } = testCase;
        const { nums } = input;
        
        test(`should ${description}`, () => {
            expect(containsDuplicate(nums)).toBe(expected);
        });
    });
}

describe('Contains Duplicate - LeetCode #217', () => {
    describe('Basic functionality', () => {
        runTestCases(testData.basicFunctionality);
    });

    describe('Edge cases with different patterns', () => {
        runTestCases(testData.edgeCasesWithDifferentPatterns);
    });

    describe('Negative numbers', () => {
        runTestCases(testData.negativeNumbers);
    });

    describe('Boundary conditions', () => {
        runTestCases(testData.boundaryConditions);
    });

    describe('Performance and large arrays', () => {
        runTestCases(testData.performanceAndLargeArrays);
    });

    describe('Special cases', () => {
        runTestCases(testData.specialCases);
    });

    describe('Mathematical correctness', () => {
        runTestCases(testData.mathematicalCorrectness);
        
        test('should return boolean value', () => {
            const result = containsDuplicate([1, 2, 3, 1]);
            expect(typeof result).toBe('boolean');
        });

        test('should handle empty array gracefully', () => {
            // Note: According to constraints, array length >= 1, but good to test
            expect(() => containsDuplicate([])).not.toThrow();
        });
    });

    describe('Return value validation', () => {
        test('should return true for arrays with duplicates', () => {
            expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
            expect(containsDuplicate([1, 1])).toBe(true);
            expect(containsDuplicate([1, 2, 3, 4, 5, 1])).toBe(true);
        });

        test('should return false for arrays without duplicates', () => {
            expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
            expect(containsDuplicate([1])).toBe(false);
            expect(containsDuplicate([1, 2, 3, 4, 5, 6])).toBe(false);
        });

        test('should return boolean type only', () => {
            const testCases = [
                [1, 2, 3, 1],
                [1, 2, 3, 4],
                [1],
                [5, 5]
            ];
            
            testCases.forEach(nums => {
                const result = containsDuplicate(nums);
                expect(typeof result).toBe('boolean');
                expect(result === true || result === false).toBe(true);
            });
        });
    });

    describe('Algorithm efficiency validation', () => {
        test('should handle moderately large arrays efficiently', () => {
            const largeArray = Array.from({length: 1000}, (_, i) => i);
            largeArray.push(500); // Add duplicate
            
            const startTime = Date.now();
            const result = containsDuplicate(largeArray);
            const endTime = Date.now();
            
            expect(result).toBe(true);
            expect(endTime - startTime).toBeLessThan(100); // Should complete in reasonable time
        });

        test('should find duplicate early when possible', () => {
            // Duplicate at the beginning should be found quickly
            const arrayWithEarlyDuplicate = [1, 1, ...Array.from({length: 1000}, (_, i) => i + 2)];
            const result = containsDuplicate(arrayWithEarlyDuplicate);
            expect(result).toBe(true);
        });

        test('should handle worst case scenario efficiently', () => {
            // Duplicate at the very end
            const worstCase = [...Array.from({length: 999}, (_, i) => i), 0];
            const result = containsDuplicate(worstCase);
            expect(result).toBe(true);
        });
    });

    describe('Constraint validation', () => {
        test('should handle minimum array length constraint', () => {
            // 1 <= nums.length
            expect(containsDuplicate([5])).toBe(false);
            expect(containsDuplicate([5, 5])).toBe(true);
        });

        test('should handle value range constraints', () => {
            // -10^9 <= nums[i] <= 10^9
            expect(containsDuplicate([-1000000000, 1000000000])).toBe(false);
            expect(containsDuplicate([-1000000000, -1000000000])).toBe(true);
            expect(containsDuplicate([1000000000, 1000000000])).toBe(true);
        });

        test('should handle maximum array length efficiently', () => {
            // Test with large array (simulating 10^5 constraint)
            const maxLengthArray = Array.from({length: 10000}, (_, i) => i % 5000);
            const result = containsDuplicate(maxLengthArray);
            expect(result).toBe(true); // Will have duplicates due to modulo
        });
    });

    describe('Edge case robustness', () => {
        test('should not modify input array', () => {
            const originalArray = [1, 2, 3, 1];
            const arrayCopy = [...originalArray];
            containsDuplicate(originalArray);
            expect(originalArray).toEqual(arrayCopy);
        });

        test('should handle arrays with only negative numbers', () => {
            expect(containsDuplicate([-1, -2, -3, -1])).toBe(true);
            expect(containsDuplicate([-1, -2, -3, -4])).toBe(false);
        });

        test('should handle arrays with zeros', () => {
            expect(containsDuplicate([0, 0])).toBe(true);
            expect(containsDuplicate([0, 1, 2])).toBe(false);
            expect(containsDuplicate([1, 0, 2, 0])).toBe(true);
        });
    });
});