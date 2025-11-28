# Complexity Analysis: Min Stack

This document analyzes the time and space complexity of different solutions for the Min Stack problem.

---

## Solution 1: Two Stacks Approach

**File:** solution1.js

- **Time Complexity:** O(1) for all operations
  - push: O(1) - constant time array operations
  - pop: O(1) - constant time array operations
  - top: O(1) - direct array access
  - getMin: O(1) - direct array access
- **Space Complexity:** O(n)
  - Main stack: O(n) space
  - Min stack: O(n) worst case when all elements are decreasing

---

## Solution 2: Single Stack with Pairs

**File:** solution2.js

- **Time Complexity:** O(1) for all operations
  - push: O(1) - constant time operations including Math.min
  - pop: O(1) - constant time array operations
  - top: O(1) - direct array access
  - getMin: O(1) - direct array access
- **Space Complexity:** O(n)
  - Single stack storing pairs: O(2n) = O(n) space
  - More consistent space usage compared to two stacks

---

## Summary Table

| Solution    | Time Complexity | Space Complexity | Notes                               |
| ----------- | --------------- | ---------------- | ----------------------------------- |
| Two Stacks  | O(1)            | O(n)             | Space efficient when few minimums   |
| Single Stack| O(1)            | O(n)             | Consistent space, simpler logic     |

**Recommendation:**

- Use Two Stacks approach when memory is a concern and minimum values change infrequently
- Use Single Stack approach for simpler implementation and consistent space usage