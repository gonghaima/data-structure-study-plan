# Complexity Analysis: N-ary Tree Postorder Traversal

This document analyzes the time and space complexity of three solutions for the N-ary Tree Postorder Traversal problem.

---

## Solution: Recursive DFS

**File:** solution.js

- **Time Complexity:** O(n)
  - Every node is visited exactly once via DFS.
- **Space Complexity:** O(n)
  - Recursion call stack depth is O(h) where h is tree height.
  - Worst case (skewed tree): h = n, so O(n).

---

## Solution 1: Iterative Stack (Reverse Preorder Trick)

**File:** solution1.js

- **Time Complexity:** O(n)
  - Each node is pushed and popped from the stack exactly once.
  - The final `result.reverse()` is O(n).
- **Space Complexity:** O(n)
  - Stack holds up to O(n) nodes in the worst case (wide tree).
  - Result array is O(n).

---

## Solution 2: Iterative Stack with Explicit State Tracking

**File:** solution2.js

- **Time Complexity:** O(n)
  - Each node is pushed and popped from the stack exactly once; child index advances one step per child, totaling O(n) steps across all nodes.
- **Space Complexity:** O(h)
  - Stack only holds nodes along the current root-to-node path (one frame per depth level).
  - Best case (balanced tree): O(log n). Worst case (skewed tree): O(n).

---

## Summary Table

| Solution                     | Time Complexity | Space Complexity | Notes                                              |
| ---------------------------- | --------------- | ---------------- | -------------------------------------------------- |
| Recursive DFS                | O(n)            | O(n)             | Simple and clean; call stack risk on very deep trees |
| Iterative (reverse preorder) | O(n)            | O(n)             | Simple iterative; stack can hold all nodes at once |
| Iterative (state tracking)   | O(n)            | O(h)             | True iterative postorder; optimal stack space      |

**Recommendation:**

- Use the **recursive DFS** for clarity and simplicity in most cases.
- Use the **iterative state-tracking** approach when stack space matters or the tree is very deep, as it achieves the best space efficiency at O(h).
- The **reverse preorder trick** is a useful middle ground — iterative but straightforward to implement.
