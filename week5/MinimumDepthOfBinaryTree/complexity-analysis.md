# Complexity Analysis: Minimum Depth of Binary Tree

This document analyzes the time and space complexity of three solutions for the Minimum Depth of Binary Tree problem.

---

## Solution: BFS Iterative

**File:** solution.js

- **Time Complexity:** O(n)
  - In the worst case all nodes are visited, but BFS returns as soon as the first leaf is found.
  - For shallow trees this is significantly faster in practice.
- **Space Complexity:** O(w)
  - Queue holds at most one full level of nodes, where w is the maximum width of the tree.
  - Worst case (complete binary tree): w = n/2, so O(n).

---

## Solution 1: DFS Recursive

**File:** solution1.js

- **Time Complexity:** O(n)
  - Every node is visited exactly once.
  - Base cases handle one-child nodes so no subtree is skipped incorrectly.
- **Space Complexity:** O(h)
  - Recursion stack depth equals tree height h.
  - O(log n) for balanced trees, O(n) for skewed trees.

---

## Solution 2: DFS Iterative (Stack)

**File:** solution2.js

- **Time Complexity:** O(n)
  - All nodes are visited to find the global minimum across all leaves.
- **Space Complexity:** O(h)
  - Stack holds at most O(h) entries at any point, where h is the tree height.

---

## Summary Table

| Solution      | Time Complexity | Space Complexity | Notes                                               |
| ------------- | --------------- | ---------------- | --------------------------------------------------- |
| BFS Iterative | O(n)            | O(w)             | Best for shallow trees; short-circuits at first leaf |
| DFS Recursive | O(n)            | O(h)             | Clean and concise; risk of stack overflow on deep trees |
| DFS Iterative | O(n)            | O(h)             | Avoids recursion; must visit all leaves before deciding |

**Recommendation:**

- Use BFS (solution.js) when the minimum depth is expected to be shallow — it stops as soon as the first leaf is reached without exploring the rest of the tree.
- Use DFS Recursive (solution1.js) for clean, readable code when tree depth is bounded.
- Use DFS Iterative (solution2.js) to avoid recursion stack concerns on very deep trees.
