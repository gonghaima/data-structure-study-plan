# Complexity Analysis: Symmetric Tree

This document analyzes the time and space complexity of four solutions for the
Symmetric Tree problem, where `n` is the number of nodes in the tree and `h`
is the height of the tree (`h = O(log n)` for a balanced tree, `h = O(n)` for
a degenerate/skewed one).

---

## Solution: Recursive Mirror Check

**File:** solution.js

- **Time Complexity:** O(n)
  - Each node is visited exactly once as the left/right pointers are walked in mirrored order.
- **Space Complexity:** O(h)
  - No auxiliary data structure is used; cost comes entirely from the recursion call stack, which is as deep as the tree is tall. Worst case O(n) for a skewed tree, O(log n) for a balanced one.

---

## Solution 1: Iterative BFS with a Queue

**File:** solution1.js

- **Time Complexity:** O(n)
  - Every node is enqueued and dequeued exactly once.
- **Space Complexity:** O(n)
  - The queue holds an entire level's worth of mirrored pairs at once. For a wide tree (e.g. a complete binary tree) the widest level holds O(n) nodes.

---

## Solution 2: Iterative DFS with a Stack

**File:** solution2.js

- **Time Complexity:** O(n)
  - Every node is pushed and popped exactly once.
- **Space Complexity:** O(h)
  - Unlike the queue-based BFS, the stack only ever holds nodes along the current root-to-leaf path (plus their mirrored siblings), so it mirrors the recursive solution's memory profile rather than the BFS one.

---

## Solution 3: Serialization Comparison

**File:** solution3.js

- **Time Complexity:** O(n)
  - Two full traversals of the tree (left subtree L→R, right subtree R→L) each visit O(n/2) nodes, plus an O(n) array comparison at the end.
- **Space Complexity:** O(n)
  - Builds two explicit arrays capturing every node value and null placeholder, each proportional to the number of nodes.

---

## Summary Table

| Solution               | Time Complexity | Space Complexity | Notes                                                        |
| ---------------------- | ---------------- | ----------------- | ------------------------------------------------------------- |
| Recursive Mirror Check | O(n)             | O(h)               | Simplest to read; relies on the call stack                    |
| Iterative BFS (Queue)  | O(n)             | O(n)               | Good when recursion depth/stack overflow is a concern           |
| Iterative DFS (Stack)  | O(n)             | O(h)               | Same memory profile as recursion, without call-stack limits    |
| Serialization          | O(n)             | O(n)               | Easiest to explain conceptually, but always allocates O(n) extra |

**Recommendation:**

- Use the **recursive** solution by default — it's the clearest expression of the mirror-check idea and space usage is only a concern for pathologically deep trees.
- Use the **iterative DFS (stack)** solution when recursion isn't available or a stack-overflow risk needs to be avoided, since it keeps the same O(h) space profile as the recursive version.
- Use the **iterative BFS (queue)** solution if a level-by-level comparison is specifically desired (e.g. as a stepping stone to level-order-based tree problems), accepting the higher O(n) space cost.
- The **serialization** approach is mainly useful pedagogically or when the mirrored sequences are needed for something else afterward; it isn't more efficient than the other options.
