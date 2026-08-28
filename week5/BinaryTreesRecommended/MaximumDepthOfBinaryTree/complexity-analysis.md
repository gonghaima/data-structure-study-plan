# Complexity Analysis: Maximum Depth of Binary Tree

This document analyzes the time and space complexity of different solutions for the Maximum Depth of Binary Tree problem.

---

## Solution: Recursive DFS

**File:** solution.js

- **Time Complexity:** O(n)
  - Visits each node exactly once in the tree.
  - n is the total number of nodes in the tree.
- **Space Complexity:** O(h)
  - Recursive call stack depth equals the height of the tree.
  - Best case (balanced tree): O(log n)
  - Worst case (skewed tree): O(n)

---

## Solution 1: Iterative DFS with Stack

**File:** solution1.js

- **Time Complexity:** O(n)
  - Visits each node exactly once using explicit stack.
  - Same as recursive approach but with iterative implementation.
- **Space Complexity:** O(h)
  - Stack space proportional to tree height.
  - Best case (balanced tree): O(log n)
  - Worst case (skewed tree): O(n)

---

## Solution 2: BFS with Queue

**File:** solution2.js

- **Time Complexity:** O(n)
  - Processes each node exactly once level by level.
  - Queue operations are O(1) per node.
- **Space Complexity:** O(w)
  - Queue space proportional to maximum width of tree.
  - Best case (skewed tree): O(1)
  - Worst case (complete binary tree): O(n/2) = O(n)

---

## Summary Table

| Solution      | Time Complexity | Space Complexity | Notes                                    |
| ------------- | --------------- | ---------------- | ---------------------------------------- |
| Recursive DFS | O(n)            | O(h)             | Clean, intuitive, but uses call stack   |
| Iterative DFS | O(n)            | O(h)             | Avoids recursion, explicit stack        |
| BFS           | O(n)            | O(w)             | Level-order traversal, good for wide trees |

**Recommendation:**

- Use recursive DFS for simplicity and readability in most cases.
- Use iterative approaches if recursion depth is a concern.
- BFS is preferred when tree is very deep but not wide.