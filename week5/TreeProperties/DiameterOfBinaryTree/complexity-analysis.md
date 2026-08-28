# Complexity Analysis: Diameter of Binary Tree

This document analyzes the time and space complexity of four solutions for the Diameter of Binary Tree problem.

---

## Solution: Recursive DFS with Closure Variable

**File:** solution.js

- **Time Complexity:** O(n)
  - Visits each node exactly once in a single DFS traversal.
- **Space Complexity:** O(h)
  - h is the height of the tree; O(log n) for balanced, O(n) worst case (skewed tree) due to call stack depth.

---

## Solution 1: Iterative Post-order DFS

**File:** solution1.js

- **Time Complexity:** O(n)
  - Visits each node exactly once using an explicit stack.
- **Space Complexity:** O(n)
  - Explicit stack holds up to O(h) nodes; Map stores heights for all n nodes.

---

## Solution 2: Naive Recursive (Separate Height Function)

**File:** solution2.js

- **Time Complexity:** O(n²)
  - For each of the n nodes, `height()` traverses the subtree beneath it — leading to redundant recomputation.
  - Worst case on a skewed tree: 1 + 2 + ... + n = O(n²).
- **Space Complexity:** O(h)
  - Two separate recursive call stacks (`diameterOfBinaryTree` and `height`) each go at most h levels deep.

---

## Solution 3: Recursive DFS Returning [height, diameter] Tuple

**File:** solution3.js

- **Time Complexity:** O(n)
  - Visits each node exactly once; height and diameter are computed together in a single pass.
- **Space Complexity:** O(h)
  - Call stack depth is bounded by the height of the tree.

---

## Summary Table

| Solution | Time Complexity | Space Complexity | Notes |
| --- | --- | --- | --- |
| solution.js — Recursive DFS (closure) | O(n) | O(h) | Clean and idiomatic; most common interview answer |
| solution1.js — Iterative post-order | O(n) | O(n) | No recursion; safe for very deep trees |
| solution2.js — Naive (separate height) | O(n²) | O(h) | Simplest to reason about; impractical at scale |
| solution3.js — Recursive DFS (tuple) | O(n) | O(h) | Functional style; no mutation or side effects |

**Recommendation:**

- Use **solution.js** or **solution3.js** for interviews — both are O(n) and easy to explain.
- Use **solution1.js** if recursion depth is a concern (e.g. highly skewed input trees).
- **solution2.js** is useful as a teaching stepping stone to show why the optimized approach matters.
