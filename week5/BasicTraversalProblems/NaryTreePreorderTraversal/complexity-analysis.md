# Complexity Analysis: N-ary Tree Preorder Traversal

This document analyzes the time and space complexity of three solutions for the N-ary Tree Preorder Traversal problem.

---

## Solution: Recursive DFS

**File:** solution.js

- **Time Complexity:** O(n)
  - Visits every node exactly once.
- **Space Complexity:** O(n)
  - Recursive call stack depth equals the height h of the tree.
  - Worst case (completely linear tree): O(n).

---

## Solution 1: Iterative with Stack

**File:** solution1.js

- **Time Complexity:** O(n)
  - Each node is pushed and popped from the stack exactly once.
- **Space Complexity:** O(n)
  - Stack can hold up to all nodes at the widest level.
  - Worst case (wide, flat tree): O(n).

---

## Solution 2: Iterative with Explicit Node + Child-Index Tracking

**File:** solution2.js

- **Time Complexity:** O(n)
  - Each node is processed exactly once; child-index advancement is O(1) per step.
- **Space Complexity:** O(h)
  - Stack depth is bounded by the tree height h, not the total number of nodes.
  - Better than O(n) for tall, narrow trees; degrades to O(n) for linear chains.

---

## Summary Table

| Solution                     | Time Complexity | Space Complexity | Notes                                              |
| ---------------------------- | --------------- | ---------------- | -------------------------------------------------- |
| Recursive DFS                | O(n)            | O(n)             | Simple and clean; call stack risk on deep trees    |
| Iterative with Stack         | O(n)            | O(n)             | Avoids recursion; stack can grow wide on flat trees|
| Iterative with Child-Index   | O(n)            | O(h)             | Most space-efficient; mirrors OS call stack behavior|

**Recommendation:**

- Use **Recursive DFS** for simplicity when tree depth is bounded.
- Use **Iterative with Stack** as a safe drop-in replacement to avoid stack overflow.
- Use **Iterative with Child-Index Tracking** when memory is a concern and the tree is tall and narrow, as it achieves O(h) space instead of O(n).
