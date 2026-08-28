# Complexity Analysis: Validate Binary Search Tree

This document analyzes the time and space complexity of four solutions for the Validate Binary Search Tree problem.

---

## Solution: Incorrect Naive Check

**File:** solution.js

- **Time Complexity:** O(n)
  - Visits each node once in a recursive traversal.
- **Space Complexity:** O(h)
  - Recursion stack depth equals tree height h.
- **Note:** This solution is incorrect as it only checks immediate children, not the entire subtree.

---

## Solution 1: Recursive In-Order Traversal

**File:** solution1.js

- **Time Complexity:** O(n)
  - Performs a full in-order traversal, visiting each node exactly once.
- **Space Complexity:** O(h)
  - Recursion stack uses O(h) space, where h is the tree height.

---

## Solution 2: Iterative In-Order Traversal

**File:** solution2.js

- **Time Complexity:** O(n)
  - Visits each node once using a stack for iterative traversal.
- **Space Complexity:** O(h)
  - Stack space for storing nodes up to the maximum depth h.

---

## Solution 3: Iterative DFS with Bounds

**File:** solution3.js

- **Time Complexity:** O(n)
  - Each node is processed once, with constant-time operations per node.
- **Space Complexity:** O(h)
  - Stack stores nodes and their bounds, proportional to tree height h.

---

## Solution 4: Recursive DFS with Bounds

**File:** solution4.js

- **Time Complexity:** O(n)
  - Recursive calls visit each node once.
- **Space Complexity:** O(h)
  - Recursion stack depth is the tree height h.

---

## Summary Table

| Solution              | Time Complexity | Space Complexity | Notes                                      |
| --------------------- | --------------- | ---------------- | ------------------------------------------ |
| Incorrect Naive Check | O(n)            | O(h)             | Incorrect; only checks immediate children  |
| Recursive In-Order    | O(n)            | O(h)             | Correct; uses in-order property of BST     |
| Iterative In-Order    | O(n)            | O(h)             | Correct; iterative version of in-order     |
| Iterative DFS Bounds  | O(n)            | O(h)             | Correct; uses bounds checking              |
| Recursive DFS Bounds  | O(n)            | O(h)             | Correct; recursive bounds checking         |

**Recommendation:**

- For correctness and efficiency, use the DFS with bounds approaches (Solutions 3 or 4), as they explicitly enforce BST properties.
- In-order traversal (Solutions 1 or 2) is also correct and leverages the sorted order property.
- Avoid the naive check (Solution 0) as it fails on many cases.