# Complexity Analysis: Binary Tree Postorder Traversal

This document analyzes the time and space complexity of all solutions for the Binary Tree Postorder Traversal problem.

---

## Solution: Recursive

**File:** solution.js

- **Time Complexity:** O(n)
  - Visits every node exactly once.
- **Space Complexity:** O(h)
  - Call stack depth equals the height of the tree. O(log n) for balanced, O(n) worst case (skewed tree).

---

## Solution 1: Iterative (One Stack + unshift)

**File:** solution1.js

- **Time Complexity:** O(n)
  - Visits every node once; `unshift` is O(n) per call, making overall O(n^2) in the worst case.
- **Space Complexity:** O(h)
  - Stack holds at most h nodes at any time, where h is the tree height.

---

## Solution 2: Iterative (Two Stacks)

**File:** solution2.js

- **Time Complexity:** O(n)
  - Each node is pushed and popped from each stack exactly once.
- **Space Complexity:** O(n)
  - Both stacks together hold up to n nodes.

---

## Solution 3: Morris Traversal

**File:** solution3.js

- **Time Complexity:** O(n)
  - Each node is visited at most twice (once to set the thread, once to remove it).
- **Space Complexity:** O(1)
  - No extra stack or recursion; modifies tree pointers in-place and restores them.

---

## Solution 4: Recursive (Spread / Functional)

**File:** solution4.js

- **Time Complexity:** O(n^2)
  - Spread operator (`...`) creates new arrays at each level, leading to O(n^2) copies in the worst case for a skewed tree.
- **Space Complexity:** O(n^2)
  - Each recursive call allocates a new array; total memory across all calls is O(n^2) worst case.

---

## Summary Table

| Solution                    | Time Complexity | Space Complexity | Notes                                          |
| --------------------------- | --------------- | ---------------- | ---------------------------------------------- |
| Recursive                   | O(n)            | O(h)             | Clean and simple; stack overflow risk on deep trees |
| Iterative (One Stack)       | O(n^2)          | O(h)             | `unshift` degrades performance; avoid for large inputs |
| Iterative (Two Stacks)      | O(n)            | O(n)             | Straightforward iterative; uses extra stack space |
| Morris Traversal            | O(n)            | O(1)             | Optimal space; complex to implement correctly  |
| Recursive (Spread)          | O(n^2)          | O(n^2)           | Elegant but inefficient; avoid for large inputs |

**Recommendation:**

- Use the **Recursive** solution for clarity and interviews unless stack depth is a concern.
- Use **Morris Traversal** when O(1) space is required.
- Avoid the **Spread** and **One Stack (unshift)** approaches for large inputs due to hidden O(n^2) costs.
