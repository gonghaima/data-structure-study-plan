# Complexity Analysis: Binary Tree Maximum Path Sum

This document analyzes the time and space complexity of four solutions for the Binary Tree Maximum Path Sum problem. Let N be the number of nodes and H be the height of the tree.

Every solution here only needs to produce a single number (the maximum path sum), so the theoretical minimum is O(N) time / O(H) space. The key insight all the efficient solutions share is a "max gain" function: for any node, the best single downward chain usable by its parent is `node.val + max(0, leftGain, rightGain)` (negative branches are discarded via the `max(0, ...)` ), while the best *complete* path through that node (usable only as a final answer, since it can't be extended further up) is `node.val + max(0, leftGain) + max(0, rightGain)`. The differences below come from *how* each approach computes and threads these two values.

---

## Solution: Recursive DFS (Closure Variable)

**File:** solution.js

- **Time Complexity:** O(N)
  - Each node is visited exactly once in a single post-order traversal; `maxGain` computes both the downward gain and updates `best` in O(1) per node.
- **Space Complexity:** O(H)
  - Just the recursion call stack, bounded by tree height. A single outer `best` variable is mutated via closure — no extra array/map per node.

---

## Solution: Iterative Post-Order DFS (Explicit Stack + Map)

**File:** solution-iterative-postorder.js

- **Time Complexity:** O(N)
  - Same O(1) work per node as the recursive version, just performed with an explicit stack instead of the call stack. Each node is pushed and popped twice (once to schedule its children, once to combine their results).
- **Space Complexity:** O(N) worst case
  - The stack holds at most O(H) pending entries, same as the recursive call stack — but the `Map` used to carry each node's computed gain up to its parent keeps an entry alive for every node until it's consumed, which can grow to O(N) rather than staying bounded by height.

---

## Solution: Divide and Conquer (Pure Return Values)

**File:** solution-divide-and-conquer.js

- **Time Complexity:** O(N)
  - Identical traversal and per-node work to the recursive closure version — only the mechanism for passing information differs.
- **Space Complexity:** O(H)
  - No outer mutable variable; each call returns a `{ through, best }` pair instead. Functionally equivalent to `solution.js`, with the same call-stack-bounded space, but avoids external mutation in favor of values flowing entirely through return values.

---

## Solution: Brute Force (Recompute Downward Gain Per Node)

**File:** solution-brute-force.js

- **Time Complexity:** O(N²) worst case
  - `traverse` visits every node, and at each one calls `maxDownward` on both children, which re-walks that entire child subtree from scratch. The same subtree's downward gain gets recomputed once per ancestor above it, instead of once total. Worst case is a skewed/linear tree, where the top node triggers an O(N) walk, the next triggers an O(N-1) walk, and so on.
- **Space Complexity:** O(H)
  - No extra per-node storage beyond the two interleaved recursive call stacks (`traverse` and `maxDownward`), both bounded by height.

---

## Summary Table

| Solution                                    | Time Complexity | Space Complexity | Notes                                                                  |
| -------------------------------------------- | ------------------ | ------------------- | ------------------------------------------------------------------------- |
| Recursive DFS (closure variable)             | O(N)               | O(H)                 | **Most efficient and simplest** — single post-order pass, O(1) per node |
| Iterative post-order (stack + map)           | O(N)               | O(N) worst case      | Avoids recursion, but the map of per-node gains isn't height-bounded     |
| Divide and conquer (pure return values)      | O(N)               | O(H)                 | Same efficiency as the closure version, without external mutation       |
| Brute force (recompute downward gain)        | O(N²) worst   | O(H)                 | Naive baseline — redundantly re-walks subtrees from every ancestor      |

**Recommendation:**

- Use **recursive DFS with a closure variable** (`solution.js`) for the best balance of simplicity and efficiency — O(N) time, O(H) space, and the most commonly seen form of this solution.
- Prefer **divide and conquer** (`solution-divide-and-conquer.js`) if avoiding mutable external state matters (e.g. for testability or a team style guide) — it's equally efficient, just restructured to pass both values through return types.
- Use the **iterative post-order** version (`solution-iterative-postorder.js`) only if recursion depth is a specific concern; this problem's constraints allow up to 3×10⁴ nodes, so a deeply skewed tree could risk a stack overflow in the recursive versions, which this one avoids at the cost of the map's O(N) space.
- Avoid the **brute force** approach (`solution-brute-force.js`) outside of illustrating why the "compute each subtree's gain exactly once" insight matters — it produces correct answers but degrades to O(N²) on skewed trees.
