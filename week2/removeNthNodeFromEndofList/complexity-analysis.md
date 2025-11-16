# Complexity Analysis: Remove Nth Node From End of List

This document analyzes the time and space complexity of three solutions for the Remove Nth Node From End of List problem.

---

## Solution: Two-Pointer (One Pass)
**File:** solution.js

- **Time Complexity:** O(n)
  - Single pass through the linked list with two pointers.
  - First pointer moves n+1 steps, then both move together until end.
- **Space Complexity:** O(1)
  - Only uses constant extra space for pointers and dummy node.

---

## Solution 1: Two-Pass Approach
**File:** solution1.js

- **Time Complexity:** O(n)
  - First pass to calculate length: O(n)
  - Second pass to find target node: O(n)
  - Total: O(2n) = O(n)
- **Space Complexity:** O(1)
  - Only uses constant extra space for variables.

---

## Solution 2: Stack-Based Approach
**File:** solution2.js

- **Time Complexity:** O(n)
  - Push all nodes to stack: O(n)
  - Pop n nodes: O(n) in worst case
- **Space Complexity:** O(n)
  - Stack stores all nodes in the linked list.

---

## Summary Table

| Solution                | Time Complexity | Space Complexity | Notes                                 |
|-------------------------|----------------|------------------|---------------------------------------|
| Two-Pointer (One Pass)  | O(n)           | O(1)             | Optimal solution, single pass         |
| Two-Pass                | O(n)           | O(1)             | Simple, but requires two passes       |
| Stack-Based             | O(n)           | O(n)             | Uses extra space, less efficient      |

**Recommendation:**
- Use the two-pointer approach for optimal performance with single pass and constant space.
- Two-pass approach is easier to understand but less efficient.
- Stack-based approach is intuitive but uses extra space.