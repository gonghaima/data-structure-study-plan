# Complexity Analysis: Path Sum II

This document analyzes the time and space complexity of four solutions for the Path Sum II problem. Let N be the number of nodes and H be the height of the tree.

Like Binary Tree Paths, this problem must return every matching root-to-leaf path in full, not just a boolean. If a leaf sits at depth d, a matching path costs O(d) to materialize. In a balanced or skewed tree the total output size is O(N), but in an adversarial "comb" tree it grows to O(N^2). This output-size bound is a property of the problem, not of any one algorithm — the sections below focus on how much *extra* array copying each approach does on top of that unavoidable cost.

---

## Solution: Recursive Backtracking with Shared Path Array

**File:** solution.js

- **Time Complexity:** O(N) traversal, up to O(N^2) worst case
  - Visits every node once; at each node, `path.push(node.val)` / `path.pop()` is O(1).
  - A copy (`[...path]`) is made only when a leaf matches the target, costing O(depth) — exactly the unavoidable output cost, nothing extra at internal nodes.
- **Space Complexity:** O(H) auxiliary
  - One shared `path` array is pushed to and popped from during recursion (O(H) recursion stack + O(H) array), reused across all branches.

---

## Solution: Iterative DFS with Stack of [node, path, remaining] Triples

**File:** solution-iterative-dfs.js

- **Time Complexity:** O(N \* H) worst case
  - Every push — not just at leaves — copies the entire path so far via `[...path, child.val]`, so internal nodes pay O(depth) copying cost too, not just leaves.
- **Space Complexity:** O(H) stack depth, but higher constant than the shared-array version
  - The stack holds at most one pending sibling per level (bounded by O(H) entries), but each entry owns its own full path array instead of sharing one, so more memory churns through allocation/garbage collection.

---

## Solution: BFS with Queue of [node, path, remaining] Triples

**File:** solution-bfs.js

- **Time Complexity:** O(N \* H) worst case
  - Same per-push path-copying cost as the iterative DFS version.
- **Space Complexity:** O(N) worst case
  - A queue processes level by level, so it can hold an entire tree level at once — up to O(N/2) nodes for the widest level of a balanced tree — each carrying its own path array, compounding the O(N) node count with O(H) path-array size per entry.

---

## Solution: Divide and Conquer (Bottom-Up Recursion)

**File:** solution-divide-and-conquer.js

- **Time Complexity:** O(N \* H) worst case
  - Each call returns an array of path arrays from its subtree; the parent spreads (`[root.val, ...childPath]`) every one of them, copying full child paths at every level on the way back up.
- **Space Complexity:** O(H) recursion depth, but higher constant
  - Every call keeps its returned array-of-arrays alive until the parent consumes it, so intermediate path arrays accumulate up the call stack instead of being reused, similar to the Binary Tree Paths divide-and-conquer variant.

---

## Summary Table

| Solution                          | Time Complexity      | Space Complexity        | Notes                                                       |
| ----------------------------------- | ---------------------- | -------------------------- | -------------------------------------------------------------- |
| Recursive backtracking (shared array) | O(N), O(N^2) worst  | O(H)                        | **Most efficient** — copies a path only once, at a matching leaf |
| Iterative DFS (stack of triples)      | O(N \* H) worst      | O(H) (higher constant)      | Copies the path on every push, not just at leaves               |
| BFS (queue of triples)                | O(N \* H) worst      | O(N) worst case             | Queue can hold a full tree level, each entry with its own path  |
| Divide and conquer                    | O(N \* H) worst      | O(H) (higher constant)      | Elegant, but copies whole path arrays at every level of return  |

**Recommendation:**

- Use **recursive backtracking with a shared path array** (`solution.js`) for the best balance of clarity and efficiency — it's the only variant here that avoids copying the path at every internal node.
- Prefer the **iterative DFS** (`solution-iterative-dfs.js`) over the recursive version only if recursion depth is a concern (e.g. very unbalanced trees risking a stack overflow); it trades some extra array copying for not relying on the call stack.
- Avoid the **BFS** variant (`solution-bfs.js`) if space matters, since a queue can grow to O(N) on wide trees, with each entry also carrying its own path array.
- Use **divide and conquer** (`solution-divide-and-conquer.js`) mainly for its readability — it mirrors how the problem is often explained conceptually — but expect the same extra copying cost as the iterative DFS/BFS versions.
