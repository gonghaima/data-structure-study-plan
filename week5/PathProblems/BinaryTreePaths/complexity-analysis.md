# Complexity Analysis: Binary Tree Paths

This document analyzes the time and space complexity of seven solutions for the Binary Tree Paths problem. Let N be the number of nodes and H be the height of the tree.

Every solution must ultimately produce the same output: one string per root-to-leaf path. If a leaf sits at depth d, its path string has length O(d). In a balanced or skewed tree the total output size is O(N), but in an adversarial "comb" tree (a spine where every spine node also has a leaf child) it grows to O(N^2), since leaf depths are 1, 2, 3, ..., N/2. This O(N^2) bound is a property of the problem's output size, not of any one algorithm — the sections below focus on how much *extra* copying or allocation each approach does on top of that unavoidable cost.

---

## Solution: Backtracking with Shared Path Array

**File:** solution.js

- **Time Complexity:** O(N) traversal, up to O(N^2) worst case
  - Visits every node once; at each leaf, `path.join('->')` costs O(depth).
  - No extra string work happens at non-leaf nodes, so total cost tracks the output size exactly.
- **Space Complexity:** O(H) auxiliary
  - One shared `path` array is pushed to and popped from during recursion (O(H) recursion stack + O(H) array), reused across all branches.

---

## Solution: Recursive DFS with String Concatenation

**File:** solution-dfs.js

- **Time Complexity:** O(N \* H) worst case
  - Every call — not just leaves — builds a brand-new string via `cPath + '->' + node.val`, copying the entire prefix built so far.
  - This adds copying work at internal nodes too, on top of the unavoidable leaf-string cost.
- **Space Complexity:** O(H) recursion depth
  - Each stack frame holds its own path string (up to O(H) characters), all discarded on return; no shared structure.

---

## Solution: Iterative DFS with String Concatenation

**File:** solution-iterative-dfs.js

- **Time Complexity:** O(N \* H) worst case
  - Same string-copying cost as `solution-dfs.js`: every `stack.push([child, path + '->' + child.val])` rebuilds the whole prefix.
- **Space Complexity:** O(H)
  - The explicit stack holds at most one pending sibling per level (binary tree), so it never exceeds O(H) entries, each carrying its own path string.

---

## Solution: BFS with Object-Keyed Queue

**File:** solution-bfs.js

- **Time Complexity:** O(N \* H) worst case
  - Same per-node string concatenation cost as the DFS string-based variants, plus `Object.keys()` lookups per queue entry.
- **Space Complexity:** O(N)
  - `checkQueue` is never shrunk (indexed with `i`, not `shift()`ed), so every entry created during the run stays resident — up to O(N) entries simultaneously, each with its own path string and child-object wrapper.

---

## Solution: Iterative DFS with Shared Path Array (Optimal)

**File:** solution-optimal.js

- **Time Complexity:** O(N) traversal, up to O(N^2) worst case
  - Each node does O(1) work: `path.length = depth` (truncate) then `path.push(node.val)`. No string is built until a leaf, where `.join('->')` runs once.
  - Matches the theoretical minimum: no wasted copying at internal nodes.
- **Space Complexity:** O(H) auxiliary
  - One shared `path` array (size ≤ H) plus a stack of `[node, depth]` pairs, bounded by O(H) entries.

---

## Solution: Divide and Conquer (Bottom-Up Recursion)

**File:** solution-divide-and-conquer.js

- **Time Complexity:** O(N \* H) worst case
  - Each call returns an array of path strings from its subtree; the parent prepends `node.val + '->'` to every one of them, again copying full prefixes rather than appending in place.
  - Additional overhead versus the top-down string-concat versions: whole arrays of paths (not just one path) are copied and merged at every level on the way back up.
- **Space Complexity:** O(H) recursion depth, but higher constant
  - Every call keeps its returned array alive until the parent consumes it, so intermediate arrays accumulate up the call stack instead of being reused.

---

## Solution: Parent-Pointer Reconstruction

**File:** solution-parent-pointer.js

- **Time Complexity:** O(N) for the BFS pass, up to O(N^2) worst case overall
  - BFS to record `parents` and collect leaves is O(N).
  - Walking up from each leaf to the root (and `reverse()`ing) costs O(depth) per leaf, matching the same output-bound total as the other approaches.
- **Space Complexity:** O(N) auxiliary
  - Requires a full `Map` of size O(N) for parent pointers (in addition to the O(H) per-leaf walk-up array) — the only approach that needs extra memory proportional to N rather than H.

---

## Summary Table

| Solution                     | Time Complexity      | Space Complexity | Notes                                                        |
| ----------------------------- | --------------------- | ----------------- | ------------------------------------------------------------ |
| Backtracking (shared array)   | O(N), O(N^2) worst    | O(H)               | Clean, minimal extra copying                                  |
| Recursive DFS (string concat) | O(N \* H) worst       | O(H)               | Simple but rebuilds the prefix string on every call            |
| Iterative DFS (string concat) | O(N \* H) worst       | O(H)               | Same overhead as above, without recursion                     |
| BFS (object-keyed queue)      | O(N \* H) worst       | O(N)               | Queue never shrinks — holds every path string simultaneously  |
| Iterative DFS (shared array)  | O(N), O(N^2) worst    | O(H)               | **Most efficient** — O(1) work per node, no wasted copying     |
| Divide and conquer            | O(N \* H) worst       | O(H) (higher const)| Elegant, but copies whole path arrays at every level of return |
| Parent-pointer reconstruction | O(N), O(N^2) worst    | O(N)               | Needs an extra O(N) map; useful if parent pointers are already available |

**Recommendation:**

- Use the **backtracking with shared array** (`solution.js`) or the **iterative optimal** (`solution-optimal.js`) version for the best balance of clarity and efficiency — both avoid rebuilding path strings at every node.
- Avoid the string-concatenation variants (`solution-dfs.js`, `solution-iterative-dfs.js`, `solution-bfs.js`, `solution-divide-and-conquer.js`) for very deep or unbalanced trees, since they redo string/array copying at every internal node.
- Use **parent-pointer reconstruction** only when you already need parent pointers for other purposes (e.g., repeated path lookups); its O(N) map is pure overhead for this problem alone.
