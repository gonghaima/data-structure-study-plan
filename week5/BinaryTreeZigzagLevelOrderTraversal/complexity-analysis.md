# Complexity Analysis: Binary Tree Zigzag Level Order Traversal

This document analyzes the time and space complexity of four solutions for the Binary Tree Zigzag Level Order Traversal problem.

---

## Solution: BFS with Queue and Direction Flag

**File:** solution.js

- **Time Complexity:** O(N)
  - Visits each node exactly once during BFS traversal.
  - Processing each level involves constant-time operations per node.
- **Space Complexity:** O(W)
  - Queue stores nodes at the current level, where W is the maximum width of the tree.
  - Result array stores all node values, O(N) in total.

---

## Solution 1: BFS with Level-based Reverse

**File:** solution1.js

- **Time Complexity:** O(N)
  - BFS traversal visits each node once.
  - Reversing the level array takes O(L) time per level, where L is level size, summing to O(N).
- **Space Complexity:** O(W)
  - Queue uses O(W) space for the widest level.
  - Result array uses O(N) space.

---

## Solution 2: DFS with Level-based Push/Unshift

**File:** solution2.js

- **Time Complexity:** O(N)
  - Recursive DFS visits each node once.
  - Push/unshift operations are amortized O(1) per node.
- **Space Complexity:** O(N)
  - Recursion stack uses O(H) space, where H is tree height (O(N) in worst case for skewed tree).
  - Result array uses O(N) space.

---

## Solution 3: DFS with Two Stacks

**File:** solution3.js

- **Time Complexity:** O(N)
  - Each node is pushed and popped once across both stacks.
  - Level processing is linear in the number of nodes per level.
- **Space Complexity:** O(N)
  - Two stacks can hold up to O(N) nodes in the worst case (e.g., complete binary tree).
  - Result array uses O(N) space.

---

## Summary Table

| Solution                          | Time Complexity | Space Complexity | Notes                                      |
| --------------------------------- | --------------- | ---------------- | ------------------------------------------ |
| BFS with Queue and Direction Flag | O(N)            | O(W)             | Efficient for wide trees, uses less space |
| BFS with Level-based Reverse      | O(N)            | O(W)             | Simple reversal after level collection    |
| DFS with Level-based Push/Unshift | O(N)            | O(N)             | Recursive, good for balanced trees        |
| DFS with Two Stacks               | O(N)            | O(N)             | Iterative DFS, handles direction changes  |

**Recommendation:**

- For most cases, use BFS solutions (solution.js or solution1.js) as they typically use less space (O(W) vs O(N)) and are iterative.
- DFS solutions are viable if recursion depth is manageable, but BFS is generally preferred for level-order traversals.