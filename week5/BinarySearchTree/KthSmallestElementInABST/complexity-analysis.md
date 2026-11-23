# Complexity Analysis: Kth Smallest Element in a BST

This document analyzes the time and space complexity of four solutions for the Kth Smallest Element in a BST problem. Let N be the number of nodes and H be the height of the tree.

The key property every solution relies on is that an in-order traversal of a BST visits nodes in ascending order, so the kth node visited is the answer. The first three solutions exploit this by stopping the traversal the moment the kth node is reached, instead of visiting every node. The fourth takes a different approach entirely - using subtree sizes to jump directly to the kth node without any in-order walk at all.

---

## Solution: Recursive In-Order Traversal (Early Termination)

**File:** solution.js

- **Time Complexity:** O(H + k)
  - The recursion descends to the leftmost node in O(H), then visits nodes in ascending order, stopping as soon as the kth one is found - so at most H + k nodes are ever visited, not all N.
- **Space Complexity:** O(H)
  - The recursion call stack is bounded by tree height.

---

## Solution: Iterative In-Order Traversal (Explicit Stack)

**File:** solution-iterative.js

- **Time Complexity:** O(H + k)
  - Identical traversal order and early-termination behavior to the recursive version, performed with an explicit stack instead of the call stack.
- **Space Complexity:** O(H)
  - The stack holds at most one pending node per level on the current left spine, same bound as the recursive call stack.

---

## Solution: Morris In-Order Traversal

**File:** solution-morris.js

- **Time Complexity:** O(H + k)
  - Same early-termination in-order visit order as the other two, but each edge is traversed at most twice (once to create a thread, once to consume and remove it) instead of using a stack or recursion to remember where to return to.
- **Space Complexity:** O(1)
  - No stack, no recursion - the traversal is done entirely by temporarily rewriting `.right` pointers (threads), which are unwound before returning (including on an early return once the kth node is found). The `threaded` tracking set used to manage this stays small, bounded by the number of threads active at any one time, not N.

---

## Solution: Subtree Size (Augmented BST / Rank Query)

**File:** solution-subtree-size.js

- **Time Complexity:** O(N) for a single call
  - One full DFS pass computes and caches every node's subtree size before any query can run - this pass alone is O(N), which is worse than the other three solutions' O(H + k) for a one-off call. The descent that follows, using those cached sizes to jump directly to the kth node, is only O(H).
- **Space Complexity:** O(N)
  - The size map holds one entry per node.
  - **Why it's still a useful solution:** it directly addresses the problem's own follow-up - if the BST supports frequent insert/delete and repeated kth-smallest queries, a real augmented BST maintains each node's subtree size incrementally as the tree changes (updating O(H) sizes per insert/delete, same cost as the modification itself), so every subsequent kth-smallest query becomes O(H) with no O(N) traversal at query time at all. This file computes sizes fresh each call to keep the example self-contained, but the technique is what the other three solutions have no way to achieve, no matter how they're tuned.

---

## Summary Table

| Solution                                   | Time Complexity (single call) | Space Complexity | Notes                                                                       |
| --------------------------------------------- | -------------------------------- | ------------------- | -------------------------------------------------------------------------------- |
| Recursive in-order (early termination)       | O(H + k)                         | O(H)                 | **Most common form** - simple, stops as soon as the answer is found           |
| Iterative in-order (explicit stack)          | O(H + k)                         | O(H)                 | Same behavior without recursion                                               |
| Morris in-order                              | O(H + k)                         | O(1)                 | **Most space-efficient** for a single query - no stack, no recursion          |
| Subtree size (augmented BST)                 | O(N) first call, O(H) per query after | O(N)            | Worse for one query, but the only approach that scales to frequent queries on a changing tree |

**Recommendation:**

- Use **recursive in-order traversal** (`solution.js`) for the clearest, most commonly seen solution to this exact problem as stated - O(H + k) time, O(H) space.
- Use **Morris traversal** (`solution-morris.js`) only when O(1) auxiliary space specifically matters - it's equally fast but avoids the stack/recursion entirely, at the cost of being noticeably harder to read and verify.
- Use the **iterative stack-based** version (`solution-iterative.js`) as a middle ground - same efficiency as the recursive version, without relying on the call stack.
- Use the **subtree-size / augmented BST** approach (`solution-subtree-size.js`) specifically when answering the problem's follow-up: if insertions and deletions happen often and kth-smallest queries happen often too, maintaining subtree sizes incrementally turns every query into O(H), which none of the traversal-based solutions can do without re-walking the tree each time.
