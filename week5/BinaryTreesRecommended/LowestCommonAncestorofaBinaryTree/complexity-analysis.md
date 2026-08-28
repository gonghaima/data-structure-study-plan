# Complexity Analysis: Lowest Common Ancestor of a Binary Tree

This document analyzes the time and space complexity of different solutions for the Lowest Common Ancestor problem.

---

## Solution: Recursive DFS Approach

**File:** solution.js

- **Time Complexity:** O(n)
  - Visits each node at most once in the worst case.
  - Each recursive call performs constant work.
- **Space Complexity:** O(h)
  - Recursion stack depth equals tree height h.
  - Best case: O(log n) for balanced tree.
  - Worst case: O(n) for skewed tree.

---

## Solution 1: Parent Pointer Approach

**File:** solution1.js

- **Time Complexity:** O(n)
  - First pass: O(n) to build parent map.
  - Second pass: O(h) to find ancestors of p.
  - Third pass: O(h) to find LCA.
- **Space Complexity:** O(n)
  - Parent map stores n entries.
  - Ancestor set stores up to h entries.

---

## Solution 2: Path Storage Approach

**File:** solution2.js

- **Time Complexity:** O(n)
  - Two DFS traversals to find paths to p and q.
  - Path comparison takes O(h) time.
- **Space Complexity:** O(h)
  - Two path arrays, each storing up to h nodes.
  - Recursion stack depth of h.

---

## Summary Table

| Solution       | Time Complexity | Space Complexity | Notes                                    |
| -------------- | --------------- | ---------------- | ---------------------------------------- |
| Recursive DFS  | O(n)            | O(h)             | Most elegant, optimal space              |
| Parent Pointer | O(n)            | O(n)             | Intuitive, but uses more space          |
| Path Storage   | O(n)            | O(h)             | Clear logic, good for understanding     |

**Recommendation:**

- Use the Recursive DFS approach for optimal performance and clean code.
- Parent Pointer approach is good for multiple LCA queries on the same tree.
- Path Storage approach helps understand the problem conceptually.