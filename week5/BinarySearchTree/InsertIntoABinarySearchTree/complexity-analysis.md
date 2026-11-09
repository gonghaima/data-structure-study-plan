# Complexity Analysis: Insert into a Binary Search Tree

This document analyzes the time and space complexity of four solutions for the Insert into a Binary Search Tree problem. Let N be the number of nodes and H be the height of the tree.

Every solution here uses the same BST property to find the insertion point: compare `val` against the current node and move into exactly one child, discarding the other subtree. All four are O(H) time. What differs is *how* the descent is structured (recursive vs. iterative, and where the pointer-attaching step happens) and whether the existing tree is mutated in place or left untouched.

---

## Solution: Recursive Descent

**File:** solution.js

- **Time Complexity:** O(H)
  - Each call compares `val` to the current node and recurses into exactly one child; recursion bottoms out at the first `null` slot, where the new node is created and returned up the chain.
- **Space Complexity:** O(H)
  - The recursion call stack holds one frame per level descended. The tree itself is mutated in place (each ancestor's `.left`/`.right` is reassigned to itself, a no-op, except at the one node that actually gets the new child).

---

## Solution: Iterative Descent (Check-Before-Advance)

**File:** solution-iterative.js

- **Time Complexity:** O(H)
  - Same left/right decision as the recursive version, but each step checks whether the next child is `null` *before* moving into it, attaching the new node immediately when found instead of returning back up through callers.
- **Space Complexity:** O(1)
  - No call stack growth — only a single `node` reference is reassigned as the loop descends.

---

## Solution: Iterative Descent (Parent Tracking)

**File:** solution-parent-tracking.js

- **Time Complexity:** O(H)
  - Structurally different control flow: `curr` is walked all the way down to `null` (tracking the last non-null node visited as `parent`), and the decision of which side to attach the new node on is made once, after the loop ends, instead of being checked at every step inside it.
- **Space Complexity:** O(1)
  - Same two-pointer, no-recursion approach as the iterative version above — just a different, commonly-taught loop shape.

---

## Solution: Immutable / Persistent

**File:** solution-immutable.js

- **Time Complexity:** O(H)
  - Same descent as the others, but instead of mutating existing nodes, it builds a new node object for every node along the path from the root to the insertion point.
- **Space Complexity:** O(H) extra allocation
  - Every ancestor on the insertion path gets rebuilt as a new object (not just a new call-stack frame), while every subtree *not* on that path is reused by reference rather than copied. The original input tree is left completely unmodified.

---

## Summary Table

| Solution                                  | Time Complexity | Space Complexity | Notes                                                                   |
| ------------------------------------------- | ------------------ | ------------------- | ---------------------------------------------------------------------------- |
| Recursive descent                          | O(H)               | O(H)                 | **Most common form** — simple, mutates the tree in place                  |
| Iterative (check-before-advance)           | O(H)               | O(1)                 | **Most space-efficient** — attaches the new node inside the loop          |
| Iterative (parent tracking)                | O(H)               | O(1)                 | Equally efficient; attaches once after the loop, a common alternate shape |
| Immutable / persistent                     | O(H)               | O(H) extra allocation | Leaves the original tree unmodified — trades allocation for no mutation  |

**Recommendation:**

- Use either **iterative** version (`solution-iterative.js` or `solution-parent-tracking.js`) for the best efficiency — both are O(H) time with O(1) space and no risk of stack overflow on a deeply skewed tree. Pick whichever loop shape reads more clearly to you; they're equivalent.
- Use **recursive descent** (`solution.js`) when code clarity matters more than the small space saving — it's the most commonly seen form of this solution.
- Use the **immutable** approach (`solution-immutable.js`) only when the original tree must remain unchanged (e.g. undo history, shared/concurrent access, functional-style state management) — it costs real extra allocation along the insertion path that the other three avoid entirely.
