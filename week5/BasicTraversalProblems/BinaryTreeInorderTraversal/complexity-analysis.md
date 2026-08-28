# Complexity Analysis: Binary Tree Inorder Traversal

This document analyzes the time and space complexity of three solutions for the Binary Tree Inorder Traversal problem.

---

## Solution: Recursive DFS

**File:** solution.js

- **Time Complexity:** O(n)
  - Visits each node exactly once.
  - n is the number of nodes in the binary tree.
- **Space Complexity:** O(n)
  - Recursive call stack can grow up to the height of the tree.
  - In the worst case (skewed tree), space is O(n).
  - In the best case (balanced tree), space is O(log n).

---

## Solution 1: Iterative using Stack

**File:** solution1.js

- **Time Complexity:** O(n)
  - Each node is visited at most twice (once when pushing, once when popping).
- **Space Complexity:** O(n)
  - Stack stores at most all nodes in the longest path from root to leaf.
  - Worst case: O(n) for skewed tree.
  - Best case: O(log n) for balanced tree.

---

## Solution 2: Morris Traversal

**File:** solution2.js

- **Time Complexity:** O(n)
  - Each edge is traversed at most twice.
  - Creates and removes temporary links in O(1) time per node.
- **Space Complexity:** O(1)
  - Uses no extra stack or recursion.
  - Modifies the tree temporarily by adding temporary edges.

---

## Solution 3: Another Iterative Approach

**File:** solution3.js

- **Time Complexity:** O(n)
  - Similar to solution1, visits each node once.
- **Space Complexity:** O(n)
  - Uses explicit stack for traversal.

---

## Summary Table

| Solution      | Time Complexity | Space Complexity | Notes                                        |
| ------------- | --------------- | ---------------- | -------------------------------------------- |
| Recursive     | O(n)            | O(n)             | Simple, uses call stack                      |
| Iterative     | O(n)            | O(n)             | Uses explicit stack                          |
| Morris        | O(n)            | O(1)             | Optimal space, modifies tree temporarily     |

**Recommendation:**

- Use Recursive approach for simplicity and readability.
- Use Morris Traversal when O(1) space is required.
- Iterative approach is useful when recursion is not available or stack depth is limited.
