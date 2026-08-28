# Complexity Analysis: N-ary Tree Level Order Traversal

This document analyzes the time and space complexity of three solutions for the N-ary Tree Level Order Traversal problem.

---

## Solution: BFS with Single Queue (queue.shift)

**File:** solution.js

- **Time Complexity:** O(n²)
  - Visits every node exactly once: O(n).
  - However, `queue.shift()` on a JavaScript array is O(k) where k is the current queue length, as it re-indexes all remaining elements.
  - In the worst case (wide tree), repeated shifts produce O(n²) total work.
- **Space Complexity:** O(n)
  - The queue holds at most O(n) nodes (the widest level of the tree).

---

## Solution 1: DFS Recursive (depth-tracked)

**File:** solution1.js

- **Time Complexity:** O(n)
  - Each node is visited exactly once via DFS.
  - Inserting into the result array at a known depth index is O(1).
- **Space Complexity:** O(n)
  - O(n) for the result array.
  - O(h) for the recursive call stack, where h is the tree height. Worst case O(n) for a skewed tree (single chain of children).

---

## Solution 2: BFS with Two Arrays (currentLevel / nextLevel)

**File:** solution2.js

- **Time Complexity:** O(n)
  - Iterates over every node once using `for...of` on arrays (no shift).
  - Collecting children into `nextLevel` is O(1) per push.
- **Space Complexity:** O(n)
  - `currentLevel` and `nextLevel` together hold at most O(n) nodes at any point (bounded by the widest level).

---

## Summary Table

| Solution              | Time Complexity | Space Complexity | Notes                                          |
| --------------------- | --------------- | ---------------- | ---------------------------------------------- |
| BFS (queue.shift)     | O(n²)           | O(n)             | Simple BFS, but array shift degrades to O(n²)  |
| DFS Recursive         | O(n)            | O(n)             | Elegant; call stack risk on very deep trees    |
| BFS (two arrays)      | O(n)            | O(n)             | Optimal BFS; avoids shift overhead             |

**Recommendation:**

- Use the **two-array BFS** (solution2.js) for best performance — it is both iterative (no stack-overflow risk) and O(n) time.
- The **DFS recursive** approach (solution1.js) is equally fast and clean, but can hit call-stack limits on very deep trees.
- Avoid the **single-queue BFS** with `queue.shift()` (solution.js) for large inputs due to its O(n²) worst-case behavior.
