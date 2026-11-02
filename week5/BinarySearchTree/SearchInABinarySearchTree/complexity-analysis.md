# Complexity Analysis: Search in a Binary Search Tree

This document analyzes the time and space complexity of four solutions for the Search in a Binary Search Tree problem. Let N be the number of nodes and H be the height of the tree.

The key property this problem can exploit is the BST invariant: every node's left subtree holds smaller values and its right subtree holds larger values, so comparing `val` to the current node lets a search discard an entire subtree at each step. Two solutions use that property directly (recursive and iterative descent); the other two deliberately don't, either to search a plain binary tree or to illustrate a different technique (flatten, then binary search).

---

## Solution: Recursive Descent

**File:** solution.js

- **Time Complexity:** O(H)
  - Each call compares `val` against the current node and recurses into exactly one child, discarding the other subtree entirely. O(log N) for a balanced BST, O(N) worst case for a completely skewed one.
- **Space Complexity:** O(H)
  - The recursion call stack holds one frame per level descended.

---

## Solution: Iterative Descent

**File:** solution-iterative.js

- **Time Complexity:** O(H)
  - Identical left/right decision to the recursive version, just performed in an explicit `while` loop instead of via recursive calls.
- **Space Complexity:** O(1)
  - No call stack growth — only a single `node` reference is reassigned as the loop descends.

---

## Solution: Brute Force (Generic Tree DFS)

**File:** solution-brute-force.js

- **Time Complexity:** O(N) worst case
  - Ignores the BST ordering entirely and visits nodes via DFS with an explicit stack until a match is found. It would work correctly on any binary tree, not just a BST, but gets no benefit from the ordering that's actually present here.
- **Space Complexity:** O(H) average, up to O(N) worst case
  - The stack's size depends on tree shape, since both children can be pushed before either is processed.

---

## Solution: In-Order Traversal + Binary Search

**File:** solution-inorder-binary-search.js

- **Time Complexity:** O(N)
  - Flattening the tree via in-order traversal (which visits a BST's nodes in ascending order) is O(N) and dominates the subsequent O(log N) binary search over the resulting array.
- **Space Complexity:** O(N)
  - The flattened array holds a reference to every node, plus O(H) recursion for the traversal itself.

---

## Summary Table

| Solution                                  | Time Complexity | Space Complexity | Notes                                                                |
| ------------------------------------------- | ------------------ | ------------------- | ------------------------------------------------------------------------ |
| Recursive descent                          | O(H)               | O(H)                 | **Simplest and most common form** — directly uses the BST property     |
| Iterative descent                          | O(H)               | O(1)                 | **Most space-efficient** — same logic, no call stack growth            |
| Brute force (generic tree DFS)             | O(N) worst         | O(H) avg / O(N) worst | Ignores BST ordering — correct on any binary tree, but no pruning     |
| In-order traversal + binary search          | O(N)               | O(N)                 | Different technique (flatten, then search) — slower and uses more space |

**Recommendation:**

- Use **iterative descent** (`solution-iterative.js`) for the best overall efficiency — O(H) time with O(1) space, and no risk of stack overflow on a deeply skewed tree.
- Use **recursive descent** (`solution.js`) when clarity/readability matters more than the small space saving — it's the most commonly seen form of this solution and equally fast.
- Avoid the **brute force** (`solution-brute-force.js`) and **in-order + binary search** (`solution-inorder-binary-search.js`) approaches in practice — both are O(N), strictly worse than O(H) once the BST property is available. They're useful mainly for illustrating what's lost by not using the ordering (brute force) or for cases where you need the full sorted order anyway and search is incidental (in-order + binary search).
