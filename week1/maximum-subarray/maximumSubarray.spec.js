const maxSubArray = require('./solution');
// const maxSubArray = require('./solution-divide-conquer');
const testData = require('./testData');

/**
 * Helper function to run test cases from data
 * @param {Array} testCases - Array of test case objects
 */
function runTestCases(testCases) {
  testCases.forEach((testCase) => {
    const { description, input, expected } = testCase;
    const { nums } = input;

    test(`should ${description}`, () => {
      expect(maxSubArray(nums)).toBe(expected);
    });
  });
}

describe('Maximum Subarray - LeetCode #53', () => {
  describe('Basic functionality', () => {
    runTestCases(testData.basicFunctionality);
  });

  describe('Edge cases with different patterns', () => {
    runTestCases(testData.edgeCasesWithDifferentPatterns);
  });

  describe('Complex subarray scenarios', () => {
    runTestCases(testData.complexSubarrayScenarios);
  });

  describe('Boundary conditions', () => {
    runTestCases(testData.boundaryConditions);
  });

  describe('Performance and large arrays', () => {
    runTestCases(testData.performanceAndLargeArrays);
  });

  describe('Mathematical correctness', () => {
    runTestCases(testData.mathematicalCorrectness);

    test('should return a number', () => {
      const result = maxSubArray([1, -3, 2, 1, -1]);
      expect(typeof result).toBe('number');
    });

    test('should return integer value', () => {
      const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
      expect(Number.isInteger(result)).toBe(true);
    });

    test('should handle single element correctly', () => {
      expect(maxSubArray([5])).toBe(5);
      expect(maxSubArray([-5])).toBe(-5);
      expect(maxSubArray([0])).toBe(0);
    });
  });

  describe('Kadane algorithm specific tests', () => {
    runTestCases(testData.kadaneAlgorithmSpecific);

    test('should handle current sum reset correctly', () => {
      // When current sum becomes negative, it should reset
      const result = maxSubArray([1, -5, 4]);
      expect(result).toBe(4);
    });

    test('should maintain running sum when beneficial', () => {
      // Should not reset when current sum is still positive
      const result = maxSubArray([1, 2, -1, 3]);
      expect(result).toBe(5);
    });
  });

  describe('Special cases', () => {
    runTestCases(testData.specialCases);
  });

  describe('Return value validation', () => {
    test('should return maximum sum as number', () => {
      const testCases = [
        { nums: [1, 2, 3], expected: 6 },
        { nums: [-1, -2, -3], expected: -1 },
        { nums: [0], expected: 0 },
      ];

      testCases.forEach(({ nums, expected }) => {
        const result = maxSubArray(nums);
        expect(typeof result).toBe('number');
        expect(result).toBe(expected);
      });
    });

    test('should handle empty array gracefully', () => {
      // Note: According to constraints, array length >= 1, but good to test
      expect(() => maxSubArray([])).not.toThrow();
    });

    test('should not modify input array', () => {
      const originalArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
      const arrayCopy = [...originalArray];
      maxSubArray(originalArray);
      expect(originalArray).toEqual(arrayCopy);
    });
  });

  describe('Algorithm efficiency validation', () => {
    test('should handle moderately large arrays efficiently', () => {
      const largeArray = Array.from(
        { length: 1000 },
        (_, i) => Math.sin(i) * 100
      );
      const startTime = Date.now();
      const result = maxSubArray(largeArray);
      const endTime = Date.now();

      expect(typeof result).toBe('number');
      expect(endTime - startTime).toBeLessThan(100); // Should complete in reasonable time
    });

    test('should find optimal solution in linear time', () => {
      // Test that algorithm is O(n) by running on large array
      const largeArray = Array.from({ length: 10000 }, (_, i) =>
        i % 2 === 0 ? 1 : -0.5
      );
      const result = maxSubArray(largeArray);
      expect(typeof result).toBe('number');
    });
  });

  describe('Constraint validation', () => {
    test('should handle minimum array length constraint', () => {
      // 1 <= nums.length
      expect(maxSubArray([42])).toBe(42);
      expect(maxSubArray([-42])).toBe(-42);
    });

    test('should handle value range constraints', () => {
      // -10^4 <= nums[i] <= 10^4
      expect(maxSubArray([-10000, 10000])).toBe(10000);
      expect(maxSubArray([10000, -10000])).toBe(10000);
      expect(maxSubArray([-10000, -5000])).toBe(-5000);
    });

    test('should handle maximum array length efficiently', () => {
      // Test with large array (simulating 10^5 constraint)
      const maxLengthArray = Array.from(
        { length: 10000 },
        (_, i) => (i % 100) - 50
      );
      const result = maxSubArray(maxLengthArray);
      expect(typeof result).toBe('number');
    });
  });

  describe('Subarray properties validation', () => {
    test('should find contiguous subarray only', () => {
      // The algorithm should only consider contiguous elements
      const result = maxSubArray([1, -10, 1]);
      expect(result).toBe(1); // Not 2 (which would be non-contiguous [1,1])
    });

    test('should include at least one element', () => {
      // Even with all negative numbers, must include one element
      const result = maxSubArray([-5, -2, -8]);
      expect(result).toBe(-2);
    });

    test('should handle subarray sum overflow protection', () => {
      // Test with numbers that could cause overflow if not handled properly
      const largeNumbers = [5000, 5000, -1, 5000, 5000];
      const result = maxSubArray(largeNumbers);
      expect(result).toBe(19999);
    });
  });

  describe('Edge case robustness', () => {
    test('should handle arrays with only zeros', () => {
      expect(maxSubArray([0, 0, 0])).toBe(0);
    });

    test('should handle mixed zeros and negatives', () => {
      expect(maxSubArray([-1, 0, -2])).toBe(0);
    });

    test('should handle mixed zeros and positives', () => {
      expect(maxSubArray([0, 1, 0])).toBe(1);
    });

    test('should handle precision with negative numbers', () => {
      const result = maxSubArray([-1, -2, -3, -4, -5]);
      expect(result).toBe(-1);
    });
  });
});
