# Two Sum Solution

## Overview
This directory contains the solution for the Two Sum problem (LeetCode #1) with a refactored test structure.

## Files Structure

### `solution.js`
- **Implementation**: Optimized O(n) time complexity solution using a hash map
- **Algorithm**: Single-pass approach that stores complements and checks for matches
- **Space Complexity**: O(n) for the hash map storage

### `testData.js`
- **Purpose**: Centralized test data separated from test logic
- **Organization**: Test cases grouped by categories (basic functionality, edge cases, performance, etc.)
- **Maintainability**: Easy to add new test cases or modify existing ones

### `twoSum.spec.js`
- **Structure**: Clean test file using data-driven testing approach
- **Helper Function**: `runTestCases()` function to reduce code duplication
- **Coverage**: Comprehensive test coverage including edge cases, boundary conditions, and performance validation

## Key Refactoring Improvements

1. **Separation of Concerns**: Test data is now separated from test logic
2. **DRY Principle**: Eliminated code duplication using helper functions
3. **Maintainability**: Easy to add new test cases by simply adding to testData.js
4. **Readability**: Cleaner test structure with descriptive test names
5. **Algorithm Implementation**: Completed the TODO with an efficient O(n) solution

## Algorithm Details

The solution uses a hash map approach:
1. Iterate through the array once
2. For each number, calculate its complement (target - current number)
3. Check if the complement exists in the hash map
4. If found, return the indices; otherwise, store the current number and its index
5. This ensures O(n) time complexity instead of the naive O(n²) approach

## Test Coverage

The tests cover:
- Basic functionality with LeetCode examples
- Edge cases (negative numbers, zeros, large numbers)
- Array positioning and ordering scenarios
- Performance validation with large datasets
- Return value validation
- Mathematical correctness
- Boundary conditions

All 29 tests pass successfully.