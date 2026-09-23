# Complexity Analysis: Path Sum

This document analyzes the time and space complexity of six solutions for the Path Sum problem. Let N be the number of nodes and H be the height of the tree.

Unlike problems that must return every root-to-leaf path (e.g. Binary Tree Paths), Path Sum only needs a boolean answer, so every correct solution can short-circuit the moment a matching path is found. This keeps the theoretical minimum at O(N) time / O(H) space for tree-shaped solutions — the analysis below focuses on which approaches actually hit that minimum and which pay extra for their structure.

---

## Solution: BFS with Queue of [node, sum] Pairs

**File:** solution.js

- **Time Complexity:** O(N)
  - Each node is enqueued and dequeued exactly once; the running sum is carried alongside the node (O(1) per node).
- **Space Complexity:** O(N) worst case
  - A queue processes level by level, so it can hold an entire tree level at once — up to O(N/2) nodes for the widest level of a balanced tree, i.e. O(N).

---

## Solution: Recursive DFS with Subtracted Remainder

**File:** solution-dfs.js

- **Time Complexity:** O(N)
  - Visits each node once; at each call, `targetSum - root.val` is O(1) work.
- **Space Complexity:** O(H)
  - No running sum is threaded down as a separate accumulator — `remaining` is recomputed and passed as the new `targetSum` on each call, so the only overhead is the recursion stack itself, bounded by tree height.

---

## Solution: Iterative DFS with Stack of [node, sum] Pairs

**File:** solution-iterative-dfs.js

- **Time Complexity:** O(N)
  - Same per-node O(1) work as the BFS version, just popped from a stack instead of a queue.
- **Space Complexity:** O(H)
  - A stack only ever holds one pending sibling per level on a binary tree (depth-first order drains a branch before moving to the next), so it stays bounded by height rather than width — the key advantage over the BFS queue.

---

## Solution: BFS with Object-Keyed Queue

**File:** solution-my-bfs-solution.js

- **Time Complexity:** O(N)
  - Same traversal cost as the other BFS/DFS variants, plus `Object.keys()` / `Object.values()` lookups per dequeue — constant-factor overhead, not asymptotic.
- **Space Complexity:** O(N) worst case
  - Same level-by-level queue growth as `solution.js`, with the added overhead of wrapping each entry in an object.

---

## Solution: Recursive DFS with Found Flag

**File:** solution-my-dfs-solution.js

- **Time Complexity:** O(N) worst case, but does not always short-circuit promptly
  - The `!found` checks before each recursive call skip further exploration once a match is located, but a match found deep in a left branch still lets sibling branches already queued in the call stack finish unwinding before returning — no wasted node visits, just deferred returns.
- **Space Complexity:** O(H)
  - Same recursion-stack bound as `solution-dfs.js`, but carries an extra closure variable (`found`) shared across all calls instead of relying purely on return values.

---

## Solution: Morris Traversal (In-Place Threading)

**File:** solution-morris.js

- **Time Complexity:** O(N)
  - Each edge is threaded and un-threaded at most once; the predecessor search inside the loop looks like extra work per node, but amortizes to O(N) total across the whole traversal (the classic Morris traversal guarantee).
- **Space Complexity:** O(H) auxiliary
  - Avoids a call stack or explicit stack/queue by threading nodes' `.right` pointers, but needs a `Set` to track which nodes currently have an active thread (so leaf detection isn't fooled by a hijacked `.right` pointer) — bounded by the number of ancestors on the current path, i.e. O(H). This is *not* the strictly O(1) space pure Morris traversal is usually prized for.
  - **Trade-off:** mutates the input tree's node values in place (`child.val += parent.val`), so the tree cannot be reused afterward with its original values. An early return also requires explicitly unwinding any still-active threads, or the tree's pointer structure is left corrupted for the caller.

---

## Summary Table

| Solution                          | Time Complexity | Space Complexity | Notes                                                          |
| ---------------------------------- | ---------------- | ------------------ | ---------------------------------------------------------------- |
| BFS (queue of pairs)                | O(N)             | O(N) worst case     | Simple, but queue can hold a full tree level                     |
| Recursive DFS (subtracted remainder)| O(N)             | O(H)                | Clean, minimal, no separate sum accumulator needed                |
| Iterative DFS (stack of pairs)      | O(N)             | O(H)                | Same simplicity as BFS version, but bounded by height not width  |
| BFS (object-keyed queue)            | O(N)             | O(N) worst case     | Extra `Object.keys`/`values` overhead, same space profile as BFS |
| Recursive DFS (found flag)          | O(N)             | O(H)                | Readable, but returns propagate slightly less eagerly            |
| Morris traversal (in-place)         | O(N)             | O(H) auxiliary      | Lowest structural overhead, but mutates input and needs care     |

**Recommendation:**

- Use **recursive DFS with subtracted remainder** (`solution-dfs.js`) or **iterative DFS with a stack** (`solution-iterative-dfs.js`) for the best balance of simplicity and space efficiency — both are O(N) time / O(H) space with no extra bookkeeping.
- Prefer the **iterative** version over the recursive one only if recursion depth is a concern (e.g. very unbalanced trees risking a stack overflow), since it manages its own heap-allocated stack instead of the call stack.
- Avoid the BFS variants (`solution.js`, `solution-my-bfs-solution.js`) if space matters, since a queue can grow to O(N) on wide trees — they're only preferable if a level-order guarantee is specifically needed (not required by this problem).
- Treat **Morris traversal** (`solution-morris.js`) as an educational deep-dive into O(1)-space traversal techniques rather than a practical default — the input mutation and thread-cleanup requirements make it fragile compared to the plain DFS solutions above, for no asymptotic space win in this particular problem.
