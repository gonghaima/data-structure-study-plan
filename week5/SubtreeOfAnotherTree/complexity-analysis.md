# Complexity Analysis: Subtree of Another Tree

This document analyzes the time and space complexity of three solutions for the Subtree of Another Tree problem. Let `m` be the number of nodes in `root` and `n` be the number of nodes in `subRoot`.

---

## Solution: Postorder Serialization

**File:** solution.js

- **Time Complexity:** O(m^2 + n) average, O(m^2 \* n) worst case
  - Serializing both trees (with a `#` marker for every null child and each value wrapped as `^val$` to prevent numeric substring collisions) is O(m + n).
  - `String.prototype.indexOf` performs naive substring search, which is O(m \* n) worst case for pathological inputs (e.g. highly repetitive serialized strings).
- **Space Complexity:** O(m + n)
  - Space for the two token arrays and their joined strings.

---

## Solution 1: Preorder Serialization

**File:** solution1.js

- **Time Complexity:** O(m^2) average, O(m \* n) worst case
  - Serializes each node as `,val` (self-delimited by the leading comma, so no separate null/boundary markers are needed beyond `#` for missing children) — O(m + n) to build.
  - Same `indexOf` substring-search caveat as above.
- **Space Complexity:** O(m + n)
  - Space for the two serialized strings (built via recursive string concatenation).

---

## Solution 2: Brute-force Recursive

**File:** solution2.js

- **Time Complexity:** O(m \* n)
  - For every node in `root` (up to `m` of them), `isSameTree` walks up to `n` nodes of `subRoot` in the worst case (e.g. all values equal).
- **Space Complexity:** O(h)
  - Where `h` is the height of `root`, for the recursion stack (`dfs` and the nested `isSameTree` calls). No extra data structures are allocated.

---

## Summary Table

| Solution                | Time Complexity                | Space Complexity | Notes                                                          |
| ------------------------ | ------------------------------- | ----------------- | ---------------------------------------------------------------- |
| Postorder Serialization  | O(m^2 + n) avg, O(m^2 \* n) worst | O(m + n)          | Correct only once null children and value boundaries are marked |
| Preorder Serialization   | O(m^2) avg, O(m \* n) worst      | O(m + n)          | Comma-prefix delimiter avoids numeric-substring ambiguity        |
| Brute-force Recursive    | O(m \* n)                       | O(h)               | Simplest to reason about; standard interview baseline            |

**Recommendation:**

- Use the **Brute-force Recursive** solution as the default: it has the most predictable worst-case complexity, the smallest memory footprint, and no subtle serialization edge cases to get wrong.
- The serialization-based solutions are useful to know because the underlying idea (encode a tree as a string, then check for a substring) generalizes to other tree-matching problems, but both are only correct if null children and value boundaries are explicitly marked — omitting either reintroduces false positives/negatives (see the bugs originally found in `solution.js`). Their `indexOf` substring search can also degrade to worse-than-brute-force time on adversarial inputs; swapping in KMP would guarantee O(m + n).
