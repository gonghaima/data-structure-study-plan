# Complexity Analysis: Path Sum

This document analyzes the time and space complexity of different solutions for the Path Sum problem.

---

## Solution 1: Recursive DFS

**File:** solution1.js

- **Time Complexity:** O(n)
  - Visits each node exactly once in the worst case.
  - Each node operation (comparison, subtraction) is O(1).
- **Space Complexity:** O(h)
  - Recursive call stack depth equals tree height.
  - Best case (balanced tree): O(log n)
  - Worst case (skewed tree): O(n)

---

## Solution 2: Iterative DFS with Stack

**File:** solution2.js

- **Time Complexity:** O(n)
  - Visits each node exactly once.
  - Stack operations (push/pop) are O(1).
- **Space Complexity:** O(n)
  - Stack can contain up to n nodes in worst case.
  - More predictable space usage than recursive approach.

---

## Summary Table

| Solution      | Time Complexity | Space Complexity | Notes                                    |
| ------------- | --------------- | ---------------- | ---------------------------------------- |
| Recursive DFS | O(n)            | O(h)             | Clean code, space depends on tree height |
| Iterative DFS | O(n)            | O(n)             | Avoids recursion, consistent space usage |

**Recommendation:**

- Use recursive DFS for cleaner, more intuitive code when stack overflow isn't a concern.
- Use iterative DFS for very deep trees or when you want to avoid recursion limits.