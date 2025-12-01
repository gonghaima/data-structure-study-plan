# Complexity Analysis: Daily Temperatures

This document analyzes the time and space complexity of three solutions for the Daily Temperatures problem.

---

## Solution: Stack-based Approach (Optimal)

**File:** solution.js

- **Time Complexity:** O(n)
  - Each element is pushed and popped from the stack at most once.
  - Total operations are linear with respect to input size.
- **Space Complexity:** O(n)
  - Stack can contain up to n indices in worst case (decreasing temperatures).
  - Result array requires O(n) space.

---

## Solution 1: Brute Force Approach

**File:** solution1.js

- **Time Complexity:** O(n^2)
  - For each day, checks all subsequent days until warmer temperature found.
  - Worst case: O(n^2) comparisons when temperatures are in decreasing order.
- **Space Complexity:** O(1)
  - Only uses constant extra space besides the result array.

---

## Solution 2: Array-based Approach (Backwards)

**File:** solution2.js

- **Time Complexity:** O(n)
  - Works backwards, using previously computed results to skip days.
  - Each day is visited at most a constant number of times.
- **Space Complexity:** O(1)
  - Only uses constant extra space besides the result array.

---

## Summary Table

| Solution     | Time Complexity | Space Complexity | Notes                                    |
| ------------ | --------------- | ---------------- | ---------------------------------------- |
| Stack-based  | O(n)            | O(n)             | Most intuitive optimal solution          |
| Brute Force  | O(n^2)          | O(1)             | Simple but inefficient for large inputs |
| Array-based  | O(n)            | O(1)             | Optimal time and space, but less clear  |

**Recommendation:**

- Use the stack-based approach for best balance of clarity and performance.
- Array-based approach is optimal for space-constrained environments.
- Brute force is only suitable for small inputs or educational purposes.