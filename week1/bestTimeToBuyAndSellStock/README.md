# Best Time to Buy and Sell Stock Solution

## Overview
This directory contains the test structure for the Best Time to Buy and Sell Stock problem (LeetCode #121) following the refactored pattern established in the twoSum solution.

## Files Structure

### `question.md`
- **Problem Statement**: LeetCode #121 - Best Time to Buy and Sell Stock
- **Constraints**: Array length 1-10^5, prices 0-10^4
- **Goal**: Find maximum profit from buying and selling stock once

### `testData.js` ✅ Generated
- **Purpose**: Centralized test data separated from test logic
- **Organization**: Test cases grouped by categories:
  - **Basic Functionality**: Core examples from LeetCode
  - **Edge Cases**: Different price patterns (increasing, decreasing, flat)
  - **Complex Scenarios**: Multiple peaks/valleys, zigzag patterns
  - **Boundary Conditions**: Min/max prices, large differences
  - **Performance**: Large arrays testing efficiency
  - **Mathematical Correctness**: Profit calculations, constraints
  - **Special Cases**: Alternating patterns, equal values

### `bestTimeToBuyAndSellStock.spec.js` ✅ Generated
- **Structure**: Clean test file using data-driven testing approach
- **Helper Function**: `runTestCases()` function to reduce code duplication
- **Coverage**: Comprehensive test coverage including:
  - Algorithm correctness validation
  - Performance testing with large arrays
  - Constraint validation
  - Return value validation
  - Edge case handling

### `solution.js` ⏳ To be implemented
- **Expected Algorithm**: O(n) time, O(1) space solution
- **Approach**: Single pass tracking minimum price and maximum profit
- **Function Signature**: `maxProfit(prices) -> number`

## Test Coverage Details

### Core Test Categories (45+ test cases):

1. **Basic Functionality** (5 tests)
   - LeetCode examples
   - Single day scenarios
   - Simple profit/no-profit cases

2. **Price Pattern Edge Cases** (5 tests)
   - All same prices
   - Strictly increasing/decreasing
   - V-shaped and inverted V patterns

3. **Complex Scenarios** (5 tests)
   - Multiple peaks and valleys
   - Optimal timing variations
   - Zigzag patterns

4. **Boundary Conditions** (4 tests)
   - Zero prices
   - Maximum price constraints
   - Large price differences

5. **Performance Testing** (4 tests)
   - Large arrays (1000+ elements)
   - Worst-case scenarios
   - Efficiency validation

6. **Mathematical Correctness** (4 tests)
   - Profit calculation verification
   - Buy-before-sell constraint
   - Multiple transaction scenarios

7. **Special Cases** (5 tests)
   - Alternating patterns
   - Equal minimums/maximums
   - Sharp increases/decreases

8. **Validation Tests** (10+ tests)
   - Return type validation
   - Constraint compliance
   - Error handling

## Algorithm Requirements

The solution should implement:
- **Time Complexity**: O(n) - single pass through array
- **Space Complexity**: O(1) - constant extra space
- **Logic**: Track minimum price seen so far and maximum profit possible

## Expected Implementation Pattern

```javascript
var maxProfit = function(prices) {
    // Track minimum price and maximum profit
    // Single pass algorithm
    // Return maximum profit (0 if no profit possible)
};

module.exports = maxProfit;
```

## Usage

Once `solution.js` is implemented, run tests with:
```bash
cd week1/bestTimeToBuyAndSellStock
npm test
```

## Benefits of This Structure

- **Maintainability**: Easy to add new test cases
- **Readability**: Clear separation of test data and logic
- **Comprehensive Coverage**: Tests all edge cases and constraints
- **Performance Validation**: Ensures algorithm efficiency
- **Consistency**: Follows the same pattern as other problems in the study plan