# Complexity Analysis: Path Sum III

This document analyzes the time and space complexity of four solutions for the Path Sum III problem. Let N be the number of nodes and H be the height of the tree.

Unlike Path Sum / Path Sum II, a path here can start and end at *any* node (as long as it only moves downward), so the naive approach of checking every node as a potential path start is where most people begin. The prefix-sum technique exists specifically to avoid the redundant re-walking that approach does — the analysis below traces how each solution handles (or avoids) that redundancy.

---

## Solution: Brute Force (Double Recursion)

**File:** solution-brute-force.js

- **Time Complexity:** O(N^2) worst case, O(N log N) average
  - The outer recursion visits every node as a potential path-start; the inner `countFrom` then re-walks that node's entire subtree looking for a match.
  - On a skewed tree, a node near the root triggers an inner walk over almost the whole tree, and this repeats for every ancestor — O(N) nodes each doing up to O(N) work gives O(N^2). On a balanced tree, the inner walk from a node at depth d only covers O(N / 2^d) nodes, so the total sums to O(N log N).
- **Space Complexity:** O(H)
  - No extra data structure — just two nested recursion stacks, each bounded by tree height.

---

## Solution: Prefix Sum + HashMap with Backtracking

**File:** solution.js

- **Time Complexity:** O(N)
  - Each node is visited exactly once; the map lookup, increment, and decrement are all O(1) (amortized, for a `Map`).
  - This is the key improvement over brute force: instead of re-walking ancestors to check for a match, every ancestor's prefix sum is already sitting in the map, so a match is a single O(1) lookup.
- **Space Complexity:** O(H)
  - The map only ever holds entries for ancestors still on the current root-to-node path — the backtrack decrement after both children return removes a node's contribution once its subtree is fully processed, keeping the map from ever growing proportional to N.

---

## Solution: Running Sums Array (No Backtracking)

**File:** solution-running-sums.js

- **Time Complexity:** O(N \* H)
  - At each node, the entire `sums` array (one entry per ancestor, up to O(H) entries) is copied (`.map()`) and scanned (`.filter()`), so every node pays O(depth) work instead of the O(1) a hashmap lookup gives.
- **Space Complexity:** O(H) per branch
  - No shared mutable state, so nothing needs explicit backtracking — each recursive call gets its own array — but that also means a full O(H)-sized array is allocated at every node rather than reusing one shared structure.

---

## Solution: Iterative Prefix Sum (Explicit Stack)

**File:** solution-iterative-prefix-sum.js

- **Time Complexity:** O(N)
  - Same asymptotic behavior as `solution.js` — every node is pushed and popped from the stack exactly twice (once as an `enter` frame, once as an `exit` frame), each doing O(1) map work.
- **Space Complexity:** O(H)
  - The map is bounded the same way as the recursive version. The explicit stack adds its own O(H) of frame objects (bounded by how many `enter`/`exit` pairs are simultaneously pending along the current path), trading call-stack depth for a heap-allocated stack — useful if recursion depth on a very unbalanced tree is a concern, at the cost of needing explicit `enter`/`exit` bookkeeping to know when to backtrack.

---

## Summary Table

| Solution                              | Time Complexity          | Space Complexity | Notes                                                               |
| --------------------------------------- | --------------------------- | ------------------- | ---------------------------------------------------------------------- |
| Brute force (double recursion)          | O(N^2) worst, O(N log N) avg | O(H)                 | Simple, but re-walks subtrees for every potential start node            |
| Prefix sum + hashmap (recursive)        | O(N)                        | O(H)                 | **Optimal** — O(1) lookup replaces re-walking ancestors                 |
| Running sums array (no backtracking)    | O(N \* H)                   | O(H) per branch      | No shared state to backtrack, but copies/scans an array at every node   |
| Prefix sum (iterative, explicit stack)  | O(N)                        | O(H)                 | Same complexity as the recursive version, trades call stack for a heap stack |

**Recommendation:**

- Use **prefix sum + hashmap** (`solution.js`) as the default — it's the only solution here that reaches O(N) time without extra per-node copying.
- Reach for the **iterative** variant (`solution-iterative-prefix-sum.js`) only if avoiding recursion specifically matters (e.g. guarding against stack overflow on pathologically deep, unbalanced trees); otherwise the recursive version is simpler to read and maintain.
- The **running sums array** (`solution-running-sums.js`) is a reasonable stepping stone between brute force and the hashmap version — it avoids the O(N^2) blowup of brute force but still pays O(H) per node, so it's worth knowing conceptually but not preferred in practice.
- Avoid **brute force** (`solution-brute-force.js`) for large or deep trees — it's the most intuitive starting point, but quadratic in the worst case.
