# Complexity Analysis: Longest Consecutive Sequence

This document analyzes the time and space complexity of common solutions for the Longest Consecutive Sequence problem.

---

## Solution: HashSet (Optimal)

**File:** solution.js

- **Time Complexity:** O(n)
  - Each number is processed at most twice (once to check if it's a sequence start, and once in the while loop).
- **Space Complexity:** O(n)
  - Space for the set storing all unique numbers.

---

## Solution 1: Sorting Approach

**File:** solution1.js

- **Time Complexity:** O(n log n)
  - Sorting the array dominates the runtime.
- **Space Complexity:** O(1) (if sort is in-place), O(n) otherwise
  - No extra data structures except for sorting.

---

## Solution 2: Union-Find (Disjoint Set Union)

**File:** solution2.js

- **Time Complexity:** O(n)
  - Each union/find operation is nearly constant time with path compression.
- **Space Complexity:** O(n)
  - Space for parent and size maps.

---
