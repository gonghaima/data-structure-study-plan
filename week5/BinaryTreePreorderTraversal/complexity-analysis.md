# Complexity Analysis: Binary Tree Preorder Traversal

This document analyzes the time and space complexity of four solutions for the Binary Tree Preorder Traversal problem.

---

## Solution: Recursive Approach (Spread Operator)

**File:** solution.js

- **Time Complexity:** O(n)
  - Visits each node exactly once.
  - Each visit performs constant time operations (pushing value to result).
- **Space Complexity:** O(h)
  - Recursion call stack depth equals the height of the tree.
  - Worst case: O(n) for a skewed tree, O(log n) for a balanced tree.

---

## Solution 1: Iterative Approach using Stack

**File:** solution1.js

- **Time Complexity:** O(n)
  - Each node is pushed to and popped from the stack exactly once.
  - All stack operations (push, pop) are O(1).
- **Space Complexity:** O(h)
  - Explicit stack stores nodes at each level.
  - Worst case: O(n) for a skewed tree, O(log n) for a balanced tree.

---

## Solution 2: Recursive with Helper Function

**File:** solution2.js

- **Time Complexity:** O(n)
  - Visits each node exactly once with constant time operations per node.
- **Space Complexity:** O(h)
  - Recursion call stack depth equals the height of the tree.
  - Worst case: O(n) for a skewed tree, O(log n) for a balanced tree.

---

## Solution 3: Morris Traversal

**File:** solution3.js

- **Time Complexity:** O(n)
  - Each node is visited at most twice (once to establish predecessor link, once to traverse).
  - All operations are O(1) per node.
- **Space Complexity:** O(1)
  - No extra space for stack or recursion.
  - Only uses a few pointers (current, predecessor).
  - Modifies tree structure temporarily but restores it after traversal.

---

## Summary Table

| Solution                    | Time Complexity | Space Complexity | Notes                                    |
| --------------------------- | --------------- | ---------------- | ---------------------------------------- |
| Recursive (Spread)          | O(n)            | O(h)             | Simple and intuitive, uses spread operator |
| Iterative (Stack)           | O(n)            | O(h)             | Avoids recursion, uses explicit stack    |
| Recursive (Helper)          | O(n)            | O(h)             | Clean recursive implementation           |
| Morris Traversal           | O(n)            | O(1)             | Optimal space, most complex to understand |

**Recommendation:**

- Use **Recursive (Spread)** or **Recursive (Helper)** for cleaner, more readable code.
- Use **Iterative (Stack)** if you prefer to avoid recursion.
- Use **Morris Traversal** for constant space requirement, especially when space is constrained.
