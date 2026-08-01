# Complexity Analysis: Same Tree

This document analyzes the time and space complexity of six solutions for the Same Tree problem (LeetCode #100).

Let `n` be the total number of nodes across both trees (the two trees have at most `n` nodes combined), and `h` be the height of the tree.

---

## Solution: Recursive (Top-Down)

**File:** solution.js

- **Time Complexity:** O(n)
  - Each node in both trees is visited exactly once.
- **Space Complexity:** O(h)
  - Call stack depth is bounded by the height of the tree; O(n) worst case for a skewed tree, O(log n) for a balanced tree.

---

## Solution 1: Iterative with Stack (Flag Variable)

**File:** solution1.mySolution.js

- **Time Complexity:** O(n)
  - Every node pair is popped from the stack once.
  - Note: on a mismatch, the loop still pushes the mismatched node's children before the `while` condition re-checks `isSame`, doing a small amount of unnecessary extra work compared to an early return.
- **Space Complexity:** O(n)
  - Worst case the stack holds O(n) node pairs (e.g. a wide/skewed tree), which can exceed the O(h) recursive call stack.

---

## Solution 1 (Improved): Iterative with Stack (Early Return)

**File:** solution1.improved.js

- **Time Complexity:** O(n)
  - Same traversal as solution1.mySolution.js, but returns `false` immediately on the first mismatch instead of pushing further children and draining the stack.
- **Space Complexity:** O(n)
  - Same worst-case stack size as solution1.mySolution.js.

---

## Solution 2: Iterative with Queue (BFS)

**File:** solution2.js

- **Time Complexity:** O(n)
  - Every node pair is dequeued once; identical traversal cost to the stack-based approach, just level-order instead of depth-first order.
- **Space Complexity:** O(n)
  - Worst case the queue holds an entire level's worth of node pairs, up to O(n) for a wide tree.

---

## Solution 3: Serialization

**File:** solution3.js

- **Time Complexity:** O(n)
  - Each tree is serialized to a string in a single preorder traversal; string comparison is also linear in the resulting string length.
- **Space Complexity:** O(n)
  - Builds a full string representation of each tree (plus recursion stack of O(h)), so overall space is dominated by the O(n) serialized strings.

---

## Solution 4: Recursive One-Liner

**File:** solution4.js

- **Time Complexity:** O(n)
  - Same traversal as solution.js, structured as base cases plus a short-circuited `&&` chain.
- **Space Complexity:** O(h)
  - Identical call stack behavior to solution.js.

---

## Summary Table

| Solution                    | File                    | Time | Space | Notes                                              |
| ---------------------------- | ------------------------ | ---- | ----- | --------------------------------------------------- |
| Recursive (top-down)          | solution.js              | O(n) | O(h)  | Simplest, most readable                              |
| Iterative stack (flag var)    | solution1.mySolution.js  | O(n) | O(n)  | Does minor unnecessary work after a mismatch is found |
| Iterative stack (early return)| solution1.improved.js    | O(n) | O(n)  | Short-circuits immediately on mismatch                |
| Iterative queue (BFS)         | solution2.js             | O(n) | O(n)  | Level-order variant of the stack approach              |
| Serialization                 | solution3.js             | O(n) | O(n)  | Elegant, but extra allocation for the strings          |
| Recursive one-liner            | solution4.js             | O(n) | O(h)  | Same as solution.js, terser style                      |

**Recommendation:**

- Use `solution.js` or `solution4.js` for everyday use — recursive, O(h) space, and easiest to read.
- Use `solution1.improved.js` or `solution2.js` when recursion depth is a concern (e.g. very deep/skewed trees) and an iterative, O(n)-space approach is preferred.
- `solution3.js` (serialization) is a nice illustration of encoding tree structure as a string, but is not more efficient than the direct traversal approaches — prefer it for readability/demonstration purposes rather than performance.
