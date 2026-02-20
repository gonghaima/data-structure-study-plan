# Complexity Analysis: Maximum Depth of Binary Tree

This document analyzes the time and space complexity of different solutions for the Maximum Depth of Binary Tree problem.

---

## Solution: Recursive DFS Approach

**File:** solution1.js

- **Time Complexity:** O(n)
  - Visits each node exactly once in the tree.
  - n is the total number of nodes.
- **Space Complexity:** O(h)
  - Recursive call stack depth equals tree height h.
  - Best case (balanced tree): O(log n)
  - Worst case (skewed tree): O(n)

---

## Solution 2: Iterative BFS Approach

**File:** solution2.js

- **Time Complexity:** O(n)
  - Each node is enqueued and dequeued exactly once.
  - Level-by-level processing visits all nodes.
- **Space Complexity:** O(w)
  - Queue stores nodes at the current level.
  - w is the maximum width of the tree.
  - Best case (skewed tree): O(1)
  - Worst case (complete tree): O(n/2) = O(n)

---

## Summary Table

| Solution    | Time Complexity | Space Complexity | Notes                                |
| ----------- | --------------- | ---------------- | ------------------------------------ |
| Recursive   | O(n)            | O(h)             | Simple, intuitive implementation     |
| Iterative   | O(n)            | O(w)             | Level-order traversal, avoids stack overflow |

**Recommendation:**

- Use recursive approach for simplicity and readability.
- Use iterative approach for very deep trees to avoid stack overflow.