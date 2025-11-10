# Complexity Analysis: Reverse Linked List

This document analyzes the time and space complexity of different solutions for the Reverse Linked List problem.

---

## Solution: Iterative Approach
**File:** solution.js

- **Time Complexity:** O(n)
  - Single pass through the linked list, visiting each node exactly once.
  - Each node operation (pointer manipulation) takes constant time.
- **Space Complexity:** O(1)
  - Uses only a constant amount of extra space for three pointers (prev, current, next).

---

## Solution: Recursive Approach
**Alternative implementation**

- **Time Complexity:** O(n)
  - Visits each node exactly once during the recursive calls.
  - Each recursive call performs constant time operations.
- **Space Complexity:** O(n)
  - Uses O(n) space on the call stack due to recursive calls.
  - In the worst case, the recursion depth equals the number of nodes.

---

## Summary Table

| Solution                | Time Complexity | Space Complexity | Notes                                 |
|-------------------------|----------------|------------------|---------------------------------------|
| Iterative               | O(n)           | O(1)             | Optimal space usage, preferred        |
| Recursive               | O(n)           | O(n)             | Elegant but uses call stack space     |

**Recommendation:**
- Use the iterative approach for optimal space complexity O(1).
- Recursive approach is more intuitive but uses O(n) extra space on the call stack.