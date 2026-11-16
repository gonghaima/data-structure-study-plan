# Complexity Analysis: Delete Node in a BST

This document analyzes the time and space complexity of five solutions for the Delete Node in a BST problem. Let N be the number of nodes and H be the height of the tree.

Every solution here descends using the BST property to find the target node in O(H) time. The differences come from *how* that descent is structured (recursive vs. iterative), *which* strategy replaces a node that has two children (in-order successor, in-order predecessor, or discarding the node entirely by merging its subtrees), and whether the existing tree is mutated in place or left untouched.

LeetCode accepts any valid resulting BST when a node with two children is deleted, since there's no single correct shape - only `solution.js` and `solution-iterative.js` (successor-based) and `solution-immutable.js` (also successor-based) match `testData.js` exactly on those cases. `solution-predecessor.js` and `solution-merge-subtrees.js` produce different, equally valid trees for those same three cases - see the note in each file.

---

## Solution: Recursive Descent, In-Order Successor

**File:** solution.js

- **Time Complexity:** O(H)
  - Descends via comparison to find the target in O(H). When the target has two children, finding its in-order successor (the minimum of its right subtree) costs another O(H) in the worst case, then that successor is removed via one more recursive descent - still O(H) total since the three walks are all bounded by height, not stacked multiplicatively.
- **Space Complexity:** O(H)
  - The recursion call stack holds one frame per level descended. The tree is mutated in place.

---

## Solution: Iterative Descent, In-Order Successor

**File:** solution-iterative.js

- **Time Complexity:** O(H)
  - Same three bounded walks as the recursive version (find target, find successor, splice successor out), performed with explicit loops and parent-pointer tracking instead of recursion.
- **Space Complexity:** O(1)
  - No call stack growth at all - only a handful of pointer variables (`parent`, `curr`, `succParent`, `succ`) are reassigned as the loops run.

---

## Solution: Recursive Descent, In-Order Predecessor

**File:** solution-predecessor.js

- **Time Complexity:** O(H)
  - Identical shape to solution.js, but replaces a two-children node with the maximum of its *left* subtree instead of the minimum of its right subtree.
- **Space Complexity:** O(H)
  - Same recursion-call-stack cost as solution.js. Produces a different (still valid) tree shape than the successor-based solutions whenever a two-children node is deleted.

---

## Solution: Merge Subtrees (No Value Copy)

**File:** solution-merge-subtrees.js

- **Time Complexity:** O(H)
  - Finding the target is O(H). For the two-children case, no successor/predecessor search is needed at all - it walks once to the rightmost node of the left subtree (O(H)) to graft the right subtree on, then promotes the left subtree directly.
- **Space Complexity:** O(H)
  - Same recursion-call-stack cost as the other recursive solutions, but conceptually simpler for the two-children case: the target node is discarded outright rather than having its value overwritten.

---

## Solution: Immutable / Persistent, In-Order Successor

**File:** solution-immutable.js

- **Time Complexity:** O(H)
  - Same three bounded walks as solution.js (find target, find successor, splice successor out), using the same successor strategy so it matches testData.js exactly.
- **Space Complexity:** O(H) extra allocation
  - Every ancestor on the path from the root to the target gets rebuilt as a new object (not just a new call-stack frame), while every subtree *not* on that path is reused by reference. The original input tree is left completely unmodified.

---

## Summary Table

| Solution                                        | Time Complexity | Space Complexity      | Notes                                                                      |
| -------------------------------------------------- | ------------------ | ------------------------ | ------------------------------------------------------------------------------- |
| Recursive, in-order successor                     | O(H)               | O(H)                      | **Most common form** - matches testData.js, mutates the tree in place        |
| Iterative, in-order successor                     | O(H)               | O(1)                      | **Most space-efficient** - same successor strategy, no call stack             |
| Recursive, in-order predecessor                   | O(H)               | O(H)                      | Equally valid alternative result on two-children deletions                    |
| Merge subtrees (no value copy)                    | O(H)               | O(H)                      | Discards the target node outright instead of copying a value into it          |
| Immutable / persistent, in-order successor        | O(H)               | O(H) extra allocation     | Matches testData.js, but leaves the original tree unmodified                  |

**Recommendation:**

- Use **iterative descent** (`solution-iterative.js`) for the best efficiency - O(H) time, O(1) space, and no risk of stack overflow on a deeply skewed tree.
- Use **recursive descent with the successor strategy** (`solution.js`) when code clarity matters more than the small space saving - it's the most commonly seen form of this solution and the one most tutorials teach first.
- Reach for **predecessor** (`solution-predecessor.js`) or **merge subtrees** (`solution-merge-subtrees.js`) mainly to understand that the two-children case has more than one correct answer - useful for interview discussions about the problem's ambiguity, not for matching a specific expected output.
- Use the **immutable** approach (`solution-immutable.js`) only when the original tree must remain unchanged (undo history, shared/concurrent access, functional-style state) - it costs real extra allocation along the deletion path that the other solutions avoid.
