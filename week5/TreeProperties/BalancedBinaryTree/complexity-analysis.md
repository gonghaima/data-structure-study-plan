# Complexity Analysis: Balanced Binary Tree

This document analyzes the time and space complexity of three solutions for the Balanced Binary Tree problem.

---

## Solution: Bottom-up DFS (Single Pass)

**File:** solution.js

- **Time Complexity:** O(n)
  - Each node is visited exactly once via post-order DFS.
  - Height and balance check are computed together in a single traversal.
- **Space Complexity:** O(h)
  - Recursion stack depth is proportional to tree height h.
  - O(log n) for a balanced tree, O(n) worst case for a skewed tree.

---

## Solution 1: Top-down DFS (Naive Recursive)

**File:** solution1.js

- **Time Complexity:** O(n^2)
  - `height()` is called once per node, and for each node it traverses the entire subtree below it.
  - For a skewed tree this results in O(1 + 2 + ... + n) = O(n^2) total work.
- **Space Complexity:** O(h)
  - Recursion stack depth is bounded by tree height h.
  - O(log n) for a balanced tree, O(n) worst case for a skewed tree.

---

## Solution 2: Iterative Post-order DFS with Stack

**File:** solution2.js

- **Time Complexity:** O(n)
  - Each node is pushed and popped from the stack twice (once unprocessed, once processed).
  - Height lookup and balance check are O(1) per node via the Map.
- **Space Complexity:** O(n)
  - The explicit stack and heightMap each hold up to O(n) entries in the worst case.

---

## Summary Table

| Solution              | Time Complexity | Space Complexity | Notes                                          |
| --------------------- | --------------- | ---------------- | ---------------------------------------------- |
| Bottom-up DFS         | O(n)            | O(h)             | Optimal; detects imbalance early via -1 signal |
| Top-down DFS (naive)  | O(n^2)          | O(h)             | Simple but recomputes heights redundantly      |
| Iterative post-order  | O(n)            | O(n)             | Avoids recursion; safe for very deep trees     |

**Recommendation:**

- Use the **bottom-up DFS** (solution.js) as the default — it is optimal in both time and space, and the early-exit via the `-1` sentinel keeps the logic clean.
- Prefer the **iterative post-order** (solution2.js) if recursion depth is a concern (e.g., inputs with tens of thousands of nodes where stack overflow is possible).
- Avoid the **top-down approach** (solution1.js) in production; it is useful only as a teaching example to illustrate why redundant height recomputation is costly.
