# Complexity Analysis: Binary Tree Preorder Traversal

This document analyzes the time and space complexity of different solutions for the Binary Tree Preorder Traversal problem.

---

## Solution: Recursive Approach

**File:** solution.js

- **Time Complexity:** O(n)
  - Visits each node exactly once.
- **Space Complexity:** O(h)
  - Recursion stack depth equals tree height h.
  - Worst case: O(n) for skewed tree.
  - Best case: O(log n) for balanced tree.

---

## Solution 1: Iterative Approach (Stack)

**File:** solution1.js

- **Time Complexity:** O(n)
  - Visits each node exactly once.
- **Space Complexity:** O(h)
  - Stack stores nodes along the path from root to current node.
  - Worst case: O(n) for skewed tree.
  - Best case: O(log n) for balanced tree.

---

## Solution 2: Morris Traversal

**File:** solution2.js

- **Time Complexity:** O(n)
  - Each edge is traversed at most twice.
- **Space Complexity:** O(1)
  - No additional data structures used.
  - Temporarily modifies tree structure but restores it.

---

## Summary Table

| Solution   | Time Complexity | Space Complexity | Notes                                    |
| ---------- | --------------- | ---------------- | ---------------------------------------- |
| Recursive  | O(n)            | O(h)             | Simple and intuitive                     |
| Iterative  | O(n)            | O(h)             | Explicit stack, avoids recursion         |
| Morris     | O(n)            | O(1)             | Optimal space, but more complex to code  |

**Recommendation:**

- Use recursive approach for simplicity and readability.
- Use iterative approach when recursion depth is a concern.
- Use Morris traversal when space optimization is critical.
