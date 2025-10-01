# 3Sum Problem - Multiple Solutions

This directory contains various approaches to solve the 3Sum problem, each with different time and space complexities.

## Problem Statement
Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

The solution set must not contain duplicate triplets.

## Solutions Overview

### 1. Two Pointer Approach (solution.js) ⭐ **Recommended**
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)
- **Description:** Classic optimal solution. Sort the array first, then for each element, use two pointers to find pairs that sum to the negative of the current element.
- **Pros:** Optimal time complexity, minimal space usage
- **Cons:** Modifies input array (sorting)

### 2. Brute Force Approach (solution-brute-force.js)
- **Time Complexity:** O(n³)
- **Space Complexity:** O(1)
- **Description:** Check all possible triplets using three nested loops.
- **Pros:** Simple to understand and implement
- **Cons:** Inefficient for large inputs

### 3. HashMap Approach (solution-hashmap.js)
- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)
- **Description:** For each pair (i, j), look for the complement in a hash map.
- **Pros:** Good time complexity, intuitive approach
- **Cons:** Uses extra space for the hash map

### 4. No Sort Approach (solution-no-sort.js)
- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)
- **Description:** Uses sets to track seen values and avoid duplicates without sorting.
- **Pros:** Doesn't modify input array
- **Cons:** Higher space complexity, uses JSON stringify for duplicate detection

### 5. Optimized Two Pointer (solution-optimized-two-pointer.js)
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)
- **Description:** Enhanced two-pointer with early termination and better duplicate handling.
- **Pros:** Best practical performance, includes optimizations
- **Cons:** Slightly more complex logic

### 6. Divide and Conquer (solution-divide-conquer.js)
- **Time Complexity:** O(n² log n)
- **Space Complexity:** O(log n)
- **Description:** Breaks down the problem into finding 2Sum for each element.
- **Pros:** Demonstrates recursive thinking, modular design
- **Cons:** Higher time complexity due to repeated sorting operations

## Performance Comparison

| Solution | Time | Space | Best Use Case |
|----------|------|-------|---------------|
| Two Pointer | O(n²) | O(1) | **Production code** - optimal balance |
| Brute Force | O(n³) | O(1) | Learning/small datasets |
| HashMap | O(n²) | O(n) | When space is not a concern |
| No Sort | O(n²) | O(n) | When input shouldn't be modified |
| Optimized Two Pointer | O(n²) | O(1) | **Performance critical** applications |
| Divide & Conquer | O(n² log n) | O(log n) | Educational purposes |

## Running Tests

```bash
npm test -- week1/ThreeSum
```

## Key Insights

1. **Sorting is crucial** for efficient duplicate handling in most approaches
2. **Two-pointer technique** is the gold standard for this type of problem
3. **Early termination** can significantly improve practical performance
4. **Space-time tradeoffs** exist between different approaches
5. **Duplicate handling** is often the trickiest part of the implementation

## When to Use Each Approach

- **Interview/Production:** Use the optimized two-pointer approach
- **Learning:** Start with brute force, then progress to two-pointer
- **Space constraints:** Two-pointer or optimized two-pointer
- **Immutable input required:** No-sort approach
- **Educational purposes:** Divide and conquer to understand recursion