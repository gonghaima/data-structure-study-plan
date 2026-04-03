# Complexity Analysis: Binary Tree Right Side View

This document analyzes the time and space complexity of three solutions for the Binary Tree Right Side View problem.

---

## Solution: BFS (Level Order Traversal)

**File:** solution.js

- **Time Complexity:** O(n)
  - Every node is enqueued and dequeued exactly once.
- **Space Complexity:** O(w)
  - Queue holds at most one full level at a time, where w is the maximum width of the tree.
  - Worst case (complete binary tree): O(n/2) = O(n).

---

## Solution 1: DFS Recursive (right-first preorder)

**File:** solution1.js

- **Time Complexity:** O(n)
  - Every node is visited exactly once.
- **Space Complexity:** O(h)
  - Recursion stack depth equals the height of the tree.
  - Worst case (skewed tree): O(n). Best case (balanced tree): O(log n).

---

## Solution 2: DFS Iterative (explicit stack)

**File:** solution2.js

- **Time Complexity:** O(n)
  - Every node is pushed and popped from the stack exactly once.
- **Space Complexity:** O(h)
  - Explicit stack depth proportional to tree height.
  - Worst case (skewed tree): O(n). Best case (balanced tree): O(log n).

---

## Summary Table

| Solution      | Time Complexity | Space Complexity | Notes                                      |
| ------------- | --------------- | ---------------- | ------------------------------------------ |
| BFS           | O(n)            | O(w) = O(n)      | Intuitive level-order approach             |
| DFS Recursive | O(n)            | O(h)             | Clean and concise; uses call stack         |
| DFS Iterative | O(n)            | O(h)             | Same logic as recursive, no call stack risk |

**Recommendation:**

- All three solutions run in O(n) time.
- DFS approaches use O(h) space, which is better than BFS's O(w) for wide trees.
- Prefer DFS Recursive for readability; use DFS Iterative to avoid potential stack overflow on very deep trees.
