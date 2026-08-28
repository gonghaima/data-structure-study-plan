# Complexity Analysis: Count Complete Tree Nodes

This document analyzes the time and space complexity of four solutions for the Count Complete Tree Nodes problem.

---

## Solution: Naive Recursive Traversal

**File:** solution.js

- **Time Complexity:** O(n)
  - Visits every node exactly once; ignores the complete-tree property entirely.
- **Space Complexity:** O(h)
  - Recursion stack depth equals tree height h.

---

## Solution 1: Iterative BFS (Level-Order)

**File:** solution1.js

- **Time Complexity:** O(n)
  - Visits every node once via a queue-driven level-order traversal.
- **Space Complexity:** O(n)
  - The queue can hold up to the widest level of the tree, which is O(n/2) in the worst case.

---

## Solution 2: Height-Comparison Recursion

**File:** solution2.js

- **Time Complexity:** O(log² n)
  - At each recursive call, computing the leftmost and rightmost heights costs O(log n). If the two heights match, the subtree is perfect and its size is returned in O(1) via `2^height - 1`; otherwise the recursion descends one level. This gives O(log n) recursive calls, each doing O(log n) height work.
- **Space Complexity:** O(log n)
  - Recursion stack depth is bounded by the tree height.

---

## Solution 3: Binary Search on Last-Level Position

**File:** solution3.js

- **Time Complexity:** O(log² n)
  - Computes the tree height once in O(log n). Then binary searches over the O(2^h) possible positions in the last level (O(log n) iterations), and each "does this position exist" check walks a single root-to-leaf path in O(log n).
- **Space Complexity:** O(1)
  - Purely iterative; no recursion stack or auxiliary data structures beyond a few counters.

---

## Summary Table

| Solution                    | Time Complexity | Space Complexity | Notes                                                |
| ---------------------------- | ---------------- | ----------------- | ----------------------------------------------------- |
| Naive Recursive Traversal    | O(n)              | O(h)               | Simple baseline; doesn't exploit completeness          |
| Iterative BFS                | O(n)              | O(n)               | Same complexity as naive, avoids recursion             |
| Height-Comparison Recursion  | O(log² n)         | O(log n)           | Classic optimal approach; short-circuits perfect subtrees |
| Binary Search on Last Level  | O(log² n)         | O(1)               | Same time complexity as Solution 2, no recursion stack |

**Recommendation:**

- For the best asymptotic performance with the simplest code, use **Solution 2** (height-comparison recursion) — it's the standard interview-expected answer for this problem.
- If constant extra space matters (e.g. very deep trees, avoiding stack growth), prefer **Solution 3**, which achieves the same O(log² n) time iteratively.
- Avoid the O(n) approaches (Solution or Solution 1) when the "less than O(n)" constraint from the problem statement must be satisfied; they're only useful as a correctness baseline.
