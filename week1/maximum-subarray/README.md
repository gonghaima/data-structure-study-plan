# Maximum Subarray Solution

## Overview
This directory contains the test structure for the Maximum Subarray problem (LeetCode #53) following the refactored pattern established in the twoSum solution.

## Files Structure

### `question.md`
- **Problem Statement**: LeetCode #53 - Maximum Subarray
- **Constraints**: Array length 1-10^5, values -10^4 to 10^4
- **Goal**: Find the subarray with the largest sum and return its sum

### `testData.js` ✅ Generated
- **Purpose**: Centralized test data separated from test logic
- **Organization**: Test cases grouped by categories:
  - **Basic Functionality**: Core examples from LeetCode
  - **Edge Cases**: Different patterns (all positive, all negative, mixed)
  - **Complex Subarray Scenarios**: Multiple potential subarrays, optimal positioning
  - **Boundary Conditions**: Min/max values, edge array sizes
  - **Performance**: Large arrays testing efficiency
  - **Mathematical Correctness**: Sum calculations, negative handling
  - **Kadane Algorithm Specific**: Algorithm behavior validation
  - **Special Cases**: Palindromic, symmetric, mountain patterns

### `maximumSubarray.spec.js` ✅ Generated
- **Structure**: Clean test file using data-driven testing approach
- **Helper Function**: `runTestCases()` function to reduce code duplication
- **Coverage**: Comprehensive test coverage including:
  - Algorithm correctness validation
  - Kadane algorithm specific behavior
  - Performance testing with large arrays
  - Constraint validation
  - Return value validation
  - Subarray properties validation
  - Edge case robustness

### `solution.js` ⏳ To be implemented
- **Expected Algorithm**: Kadane's Algorithm - O(n) time, O(1) space
- **Alternative**: Divide and Conquer approach - O(n log n) time
- **Function Signature**: `maxSubArray(nums) -> number`

## Test Coverage Details

### Core Test Categories (60+ test cases):

1. **Basic Functionality** (6 tests)
   - LeetCode examples
   - Single element scenarios
   - Simple positive/negative cases

2. **Edge Cases with Different Patterns** (7 tests)
   - All negative numbers
   - All positive numbers
   - All zeros, mixed with zeros
   - Alternating patterns
   - Large negative vs small positive

3. **Complex Subarray Scenarios** (6 tests)
   - Multiple potential subarrays
   - Optimal subarray at different positions
   - Entire array as optimal
   - Kadane algorithm stress tests

4. **Boundary Conditions** (5 tests)
   - Minimum/maximum array lengths
   - Extreme values (±10^4)
   - Mix of boundary values

5. **Performance Testing** (4 tests)
   - Large arrays (100+ elements)
   - Different optimal positions
   - Alternating patterns

6. **Mathematical Correctness** (5 tests)
   - Sum calculation accuracy
   - Negative sum handling
   - Zero crossing scenarios
   - Large sum verification

7. **Kadane Algorithm Specific** (5 tests)
   - Current sum reset scenarios
   - Running sum maintenance
   - Multiple resets
   - Classic algorithm behavior

8. **Special Cases** (5 tests)
   - Palindromic arrays
   - Symmetric patterns
   - Mountain/valley patterns
   - Sawtooth patterns

9. **Validation Tests** (15+ tests)
   - Return type validation
   - Input immutability
   - Constraint compliance
   - Subarray properties
   - Edge case robustness

## Algorithm Approaches

### Approach 1: Kadane's Algorithm (Optimal)
```javascript
// O(n) time, O(1) space
// Track current sum and maximum sum
// Reset current sum when it becomes negative
```

### Approach 2: Divide and Conquer
```javascript
// O(n log n) time, O(log n) space
// Recursively divide array and find max crossing subarray
// More subtle but demonstrates different algorithmic thinking
```

### Approach 3: Brute Force
```javascript
// O(n^2) or O(n^3) time
// Check all possible subarrays - not recommended
```

## Expected Implementation Pattern

```javascript
var maxSubArray = function(nums) {
    // Implement Kadane's algorithm
    // Track current sum and maximum sum
    // Handle all negative numbers case
    // Return maximum sum found
};

module.exports = maxSubArray;
```

## Key Algorithm Insights

- **Kadane's Algorithm**: If current sum becomes negative, reset it to 0
- **All Negative Case**: Return the least negative number
- **Contiguous Requirement**: Only consider adjacent elements
- **At Least One Element**: Must include at least one element in result

## Usage

Once `solution.js` is implemented, run tests with:
```bash
cd week1/maximum-subarray
npm test
```

## Benefits of This Structure

- **Maintainability**: Easy to add new test cases
- **Algorithm Validation**: Specific tests for Kadane's algorithm behavior
- **Comprehensive Coverage**: Tests all edge cases and mathematical properties
- **Performance Validation**: Ensures O(n) time complexity
- **Multiple Approaches**: Can test different algorithm implementations
- **Consistency**: Follows the same pattern as other problems in the study plan

## Follow-up Challenge

The problem includes a follow-up to implement a divide and conquer solution. The test structure supports testing multiple algorithm approaches for comparison.