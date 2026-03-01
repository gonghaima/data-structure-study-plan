# Complexity Analysis: Lowest Common Ancestor of a Binary Tree

This document analyzes the time and space complexity of four solutions for the Lowest Common Ancestor problem.

---

## Solution: Recursive DFS (Most Common)

**File:** solution.js

- **Time Complexity:** O(n)
  - Visits each node at most once in the worst case.
  - Each recursive call processes one node.
- **Space Complexity:** O(h)
  - Recursion stack depth equals tree height.
  - Best case: O(log n) for balanced tree, Worst case: O(n) for skewed tree.

---

## Solution 1: Iterative with Parent Pointers

**File:** solution1.js

- **Time Complexity:** O(n)
  - First phase: traverse tree to build parent map - O(n).
  - Second phase: trace ancestors of p - O(h).
  - Third phase: trace ancestors of q until match - O(h).
- **Space Complexity:** O(n)
  - Parent map stores all nodes - O(n).
  - Ancestors set stores at most h nodes - O(h).
  - Stack for traversal - O(h).

---

## Solution 2: Path-based Approach

**File:** solution2.js

- **Time Complexity:** O(n)
  - Two separate DFS traversals to find paths to p and q.
  - Each path finding is O(n) in worst case.
- **Space Complexity:** O(h)
  - Two path arrays, each storing at most h nodes.
  - Recursion stack depth for findPath function - O(h).

---

## Solution 3: Helper Function with Status

**File:** solution3.js

- **Time Complexity:** O(n)
  - Single traversal visiting each node once.
  - Each node processes constant time operations.
- **Space Complexity:** O(h)
  - Recursion stack depth equals tree height.
  - Helper function returns constant space object.

---

## Summary Table

| Solution           | Time Complexity | Space Complexity | Notes                                    |
| ------------------ | --------------- | ---------------- | ---------------------------------------- |
| Recursive DFS      | O(n)            | O(h)             | Most elegant and commonly used           |
| Parent Pointers    | O(n)            | O(n)             | Good for multiple LCA queries            |
| Path-based         | O(n)            | O(h)             | Intuitive but requires two traversals   |
| Helper with Status | O(n)            | O(h)             | More explicit state tracking             |

**Recommendation:**

- Use the **Recursive DFS** approach for single queries - most elegant and efficient.
- Use **Parent Pointers** when you need to perform multiple LCA queries on the same tree.
- **Path-based** approach is good for understanding but less efficient due to double traversal.