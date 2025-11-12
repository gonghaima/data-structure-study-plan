# Complexity Analysis: Merge Two Sorted Lists

This document analyzes the time and space complexity of different solutions for the Merge Two Sorted Lists problem.

---

## Solution: Iterative Approach
**File:** solution.js

- **Time Complexity:** O(m + n)
  - Where m and n are the lengths of list1 and list2 respectively.
  - Each node is visited exactly once during the merge process.
- **Space Complexity:** O(1)
  - Only uses a constant amount of extra space for pointers.
  - The result list reuses existing nodes without creating new ones.

---

## Solution: Recursive Approach
**Alternative implementation**

- **Time Complexity:** O(m + n)
  - Same as iterative - each node visited once.
  - Recursive calls traverse both lists completely.
- **Space Complexity:** O(m + n)
  - Due to the call stack depth in recursion.
  - Worst case: stack depth equals the total number of nodes.

---

## Summary Table

| Solution                | Time Complexity | Space Complexity | Notes                                 |
|-------------------------|----------------|------------------|---------------------------------------|
| Iterative               | O(m + n)       | O(1)             | Optimal space usage, recommended      |
| Recursive               | O(m + n)       | O(m + n)         | Clean code but uses more memory       |

**Recommendation:**
- Use the iterative approach for optimal space efficiency.
- Recursive approach is more intuitive but has higher space complexity due to call stack.