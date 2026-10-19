# Complexity Analysis: Sum Root to Leaf Numbers

This document analyzes the time and space complexity of four solutions for the Sum Root to Leaf Numbers problem. Let N be the number of nodes and H be the height of the tree.

Every solution here only needs to produce a single number (the total sum), not a list of paths, so the theoretical minimum is O(N) time / O(H) space — the same minimum as Path Sum. The differences below come from *how* each approach builds up the root-to-leaf number as it descends: arithmetic (`num * 10 + digit`) versus string concatenation, and how much that costs at each node.

---

## Solution: Recursive DFS (Arithmetic)

**File:** solution.js

- **Time Complexity:** O(N)
  - Each node is visited once; `num * 10 + node.val` is an O(1) integer operation regardless of how many digits `num` already has.
- **Space Complexity:** O(H)
  - Just the recursion call stack, bounded by tree height. No extra array/string is built — `num` is a single integer threaded through the calls.

---

## Solution: Iterative DFS (Stack of [node, num] Pairs)

**File:** solution-iterative-dfs.js

- **Time Complexity:** O(N)
  - Same O(1) arithmetic per node as the recursive version, just popped from an explicit stack instead of the call stack.
- **Space Complexity:** O(H)
  - The stack holds at most one pending sibling per level (depth-first order drains a branch before moving to the next), so it stays bounded by height.

---

## Solution: BFS (Queue of [node, num] Pairs)

**File:** solution-bfs.js

- **Time Complexity:** O(N)
  - Identical per-node arithmetic cost to the DFS variants.
- **Space Complexity:** O(N) worst case
  - A queue processes level by level, so it can hold an entire tree level at once — up to O(N/2) nodes for the widest level of a balanced tree — unlike the stack-based versions, which never hold more than O(H) entries.

---

## Solution: Divide and Conquer (Bottom-Up, String Concatenation)

**File:** solution-divide-and-conquer.js

- **Time Complexity:** O(N \* H) worst case
  - Each call returns an array of digit-strings from its subtree; the parent does `node.val + childPath` for every one of them, which copies the entire string each time rather than appending a single digit in O(1) (as the arithmetic versions do).
  - The final `reduce` converting each digit-string to a number is also O(digits) per path, but that cost is bounded by the unavoidable output size.
- **Space Complexity:** O(H) recursion depth, but higher constant
  - Every call keeps its returned array of strings alive until the parent consumes it, so intermediate path strings accumulate up the call stack instead of a single integer being threaded through, unlike the other three solutions.

---

## Summary Table

| Solution                           | Time Complexity | Space Complexity | Notes                                                             |
| ------------------------------------ | ------------------ | ------------------- | -------------------------------------------------------------------- |
| Recursive DFS (arithmetic)           | O(N)               | O(H)                 | **Most efficient** — O(1) arithmetic per node, no string/array building |
| Iterative DFS (stack of pairs)       | O(N)               | O(H)                 | Same simplicity as recursive, without the call stack                 |
| BFS (queue of pairs)                 | O(N)               | O(N) worst case      | Queue can hold a full tree level, unlike the stack-based versions    |
| Divide and conquer (string concat)   | O(N \* H) worst   | O(H) (higher const)  | Readable, but copies whole digit-strings at every level of return    |

**Recommendation:**

- Use **recursive DFS with arithmetic** (`solution.js`) or **iterative DFS** (`solution-iterative-dfs.js`) for the best balance of simplicity and efficiency — both are O(N) time / O(H) space with no extra bookkeeping.
- Prefer the **iterative** version only if recursion depth is a specific concern; this problem's constraints cap depth at 10, so in practice it rarely matters here.
- Avoid the **BFS** variant (`solution-bfs.js`) if space matters, since a queue can grow to O(N) on wide trees — there's no level-order requirement in this problem to justify it.
- Use **divide and conquer** (`solution-divide-and-conquer.js`) mainly for its conceptual clarity (it mirrors how the problem is often explained — "each subtree contributes its own list of numbers") rather than for performance, since string concatenation at every level adds real overhead the arithmetic versions avoid entirely.
