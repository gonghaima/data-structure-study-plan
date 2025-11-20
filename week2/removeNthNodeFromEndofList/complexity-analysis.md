# Complexity Analysis: Remove Nth Node From End of List

This document analyzes the time and space complexity of four solutions for the Remove Nth Node From End of List problem.

---

## Solution: Two-pointer Approach
**File:** solution.js

- **Time Complexity:** O(n)
  - Single pass through the list with two pointers.
  - Fast pointer moves n+1 steps ahead, then both pointers move together.
- **Space Complexity:** O(1)
  - Only uses constant extra space for pointers and dummy node.

---

## Solution 1: Two-pass Approach
**File:** solution1.js

- **Time Complexity:** O(n)
  - First pass to count the length of the list.
  - Second pass to reach the target node.
- **Space Complexity:** O(1)
  - Only uses constant extra space for counters and pointers.

---

## Solution 2: Stack-based Approach
**File:** solution2.js

- **Time Complexity:** O(n)
  - Single pass to push all nodes to stack.
  - Pop n times to find the target node.
- **Space Complexity:** O(n)
  - Stack stores all nodes in the list.

---

## Solution 3: Recursive Approach
**File:** solution3.js

- **Time Complexity:** O(n)
  - Single pass through the list via recursion.
  - Each node is visited once.
- **Space Complexity:** O(n)
  - Recursion stack depth equals the length of the list.

---

## Summary Table

| Solution                | Time Complexity | Space Complexity | Notes                                 |
|-------------------------|----------------|------------------|---------------------------------------|
| Two-pointer             | O(n)           | O(1)             | Optimal, single pass with constant space |
| Two-pass                | O(n)           | O(1)             | Simple, but requires two passes       |
| Stack-based             | O(n)           | O(n)             | Intuitive, but uses extra space      |
| Recursive               | O(n)           | O(n)             | Elegant, but uses call stack space   |

**Recommendation:**
- Use the two-pointer approach for optimal performance with constant space usage.
- Two-pass approach is simpler to understand but less efficient due to multiple traversals.