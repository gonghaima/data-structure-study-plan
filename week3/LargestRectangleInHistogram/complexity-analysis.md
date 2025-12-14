# Complexity Analysis: Largest Rectangle in Histogram

This document analyzes the time and space complexity of different solutions for the Largest Rectangle in Histogram problem.

---

## Solution: Brute Force Approach

**File:** solution1.js

- **Time Complexity:** O(n^2)
  - For each starting position i, expands to all possible ending positions j.
  - Worst case: O(n^2) comparisons for all rectangle combinations.
- **Space Complexity:** O(1)
  - Only uses constant extra space for variables.

---

## Solution 2: Stack-based Approach

**File:** solution2.js

- **Time Complexity:** O(n)
  - Each element is pushed and popped from stack at most once.
  - Linear traversal with constant work per element.
- **Space Complexity:** O(n)
  - Stack can store up to n indices in worst case (ascending heights).

---

## Summary Table

| Solution    | Time Complexity | Space Complexity | Notes                               |
| ----------- | --------------- | ---------------- | ----------------------------------- |
| Brute Force | O(n^2)          | O(1)             | Simple but inefficient for large inputs |
| Stack-based | O(n)            | O(n)             | Optimal solution using monotonic stack |

**Recommendation:**

- Use the stack-based approach for optimal performance.
- The stack maintains indices of bars in increasing height order, enabling efficient area calculation when a smaller bar is encountered.