const twoSum = require('./solution');
const testData = require('./testData');

/**
 * Helper function to run test cases from data
 * @param {Array} testCases - Array of test case objects
 */
function runTestCases(testCases) {
    testCases.forEach(testCase => {
        const { description, input, expected } = testCase;
        const { nums, target } = input;
        
        test(`should ${description}`, () => {
            expect(twoSum(nums, target)).toEqual(expected);
        });
    });
}

describe('Two Sum - LeetCode #1', () => {
    describe('Basic functionality', () => {
        runTestCases(testData.basicFunctionality);
    });

    describe('Edge cases with different number types', () => {
        runTestCases(testData.edgeCasesWithDifferentNumberTypes);
    });

    describe('Array order and positioning', () => {
        runTestCases(testData.arrayOrderAndPositioning);
    });

    describe('Performance and complexity validation', () => {
        runTestCases(testData.performanceAndComplexity);
    });

    describe('Return value validation', () => {
        // Test basic functionality from data
        runTestCases(testData.returnValueValidation);
        
        // Additional validation tests that check properties of the result
        test('should return array with exactly two elements', () => {
            const testCase = testData.returnValueValidation[0];
            const result = twoSum(testCase.input.nums, testCase.input.target);
            expect(Array.isArray(result)).toBe(true);
            expect(result).toHaveLength(2);
        });

        test('should return indices in ascending order', () => {
            const testCase = testData.returnValueValidation[1];
            const result = twoSum(testCase.input.nums, testCase.input.target);
            expect(result[0]).toBeLessThan(result[1]);
        });

        test('should return valid indices within array bounds', () => {
            const testCase = testData.returnValueValidation[2];
            const { nums, target } = testCase.input;
            const result = twoSum(nums, target);
            expect(result[0]).toBeGreaterThanOrEqual(0);
            expect(result[1]).toBeGreaterThanOrEqual(0);
            expect(result[0]).toBeLessThan(nums.length);
            expect(result[1]).toBeLessThan(nums.length);
        });
    });

    describe('Mathematical correctness', () => {
        runTestCases(testData.mathematicalCorrectness);
        
        test('should ensure returned indices point to numbers that sum to target', () => {
            const testCase = testData.mathematicalCorrectness[0];
            const { nums, target } = testCase.input;
            const result = twoSum(nums, target);
            
            expect(nums[result[0]] + nums[result[1]]).toBe(target);
        });
    });

    describe('Boundary conditions', () => {
        runTestCases(testData.boundaryConditions);
    });
});