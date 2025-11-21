# Complexity Analysis: Shortest Palindrome

This document analyzes the time and space complexity of two solutions for the Shortest Palindrome problem.

---

## Solution: Brute-force Reverse Matching

**File:** solution.js

- **Time Complexity:** O(n^2)
  - For each possible prefix, compares substrings of length up to n.
  - Worst case: O(n^2) comparisons.
- **Space Complexity:** O(n)
  - Space for the reversed string and temporary substrings.

---

## Solution 1: KMP-based Approach

**File:** solution1.js

- **Time Complexity:** O(n)
  - Builds the LPS array for a string of length 2n+1 (original + separator + reversed).
  - All operations (building LPS, substring, concatenation) are linear.
- **Space Complexity:** O(n)
  - Space for the reversed string, concatenated string, and LPS array.

---

## Summary Table

| Solution    | Time Complexity | Space Complexity | Notes                               |
| ----------- | --------------- | ---------------- | ----------------------------------- |
| Brute-force | O(n^2)          | O(n)             | Simple, but slow for long strings   |
| KMP-based   | O(n)            | O(n)             | Optimal, efficient for large inputs |

**Recommendation:**

- Use the KMP-based approach for best performance, especially for long strings.
- Brute-force is simple and easy to implement, but not efficient for large inputs.
