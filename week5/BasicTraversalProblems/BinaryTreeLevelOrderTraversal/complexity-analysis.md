# Complexity Analysis: Binary Tree Level Order Traversal

This document analyzes the time and space complexity of different solutions for the Binary Tree Level Order Traversal problem.

---

## Solution: BFS Iterative Approach

**File:** solution1.js

- **Time Complexity:** O(n)
  - Visits each node exactly once where n is the number of nodes in the tree.
  - Queue operations (enqueue/dequeue) are O(1) per node.
- **Space Complexity:** O(w)
  - Where w is the maximum width of the tree (maximum number of nodes at any level).
  - In the worst case (complete binary tree), w = n/2, so O(n) space.
  - Queue stores at most one level of nodes at a time.

---

## Solution 2: DFS Recursive Approach

**File:** solution2.js

- **Time Complexity:** O(n)
  - Visits each node exactly once in a depth-first manner.
  - Array operations for level management are O(1) amortized.
- **Space Complexity:** O(h)
  - Where h is the height of the tree for the recursion stack.
  - In the worst case (skewed tree), h = n, so O(n) space.
  - In the best case (balanced tree), h = log(n), so O(log n) space.
  - Additional O(n) space for the result array.

---

## Summary Table

| Solution    | Time Complexity | Space Complexity | Notes                                    |
| ----------- | --------------- | ---------------- | ---------------------------------------- |
| BFS Iterative | O(n)          | O(w)             | Uses queue, space depends on tree width  |
| DFS Recursive | O(n)          | O(h)             | Uses recursion stack, space depends on height |

**Recommendation:**

- Use BFS iterative approach for most cases as it naturally processes level by level.
- DFS recursive approach is more intuitive but may cause stack overflow for very deep trees.
- Both have the same time complexity, choose based on space constraints and tree characteristics.