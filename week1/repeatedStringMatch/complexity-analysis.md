# Complexity Analysis: Repeated String Match

This document analyzes the time and space complexity for all three solutions:

- `solution.js` (String repeat & includes)
- `solution1.js` (KMP-based)
- `solution2.js` (Rabin-Karp-based)

---

## 1. solution.js (String repeat & includes)

**Approach:**

- Repeats string `a` enough times to cover `b`, then checks if `b` is a substring using `includes`.

**Time Complexity:**

- Let `n = a.length`, `m = b.length`.
- Repeating `a` up to `ceil(m/n) + 1` times: O(m + n)
- `includes` runs in O((n + m) \* m) in the worst case (naive substring search), but in practice is often O(n + m) due to optimized implementations.
- **Overall:** O(n + m)

**Space Complexity:**

- Storing the repeated string: O(n + m)

---

## 2. solution1.js (KMP-based)

**Approach:**

- Builds the LPS (Longest Prefix Suffix) array for `b` (O(m)), then simulates repeated concatenation of `a` while searching for `b` using KMP.

**Time Complexity:**

- Building LPS: O(m)
- Simulated KMP search: Each character in the repeated `a` is compared at most twice (once for match, once for fallback), so O(n \* k + m), where `k` is the number of repeats (at most ceil((m + n)/n)).
- **Overall:** O(n + m)

**Space Complexity:**

- LPS array: O(m)
- No extra space for repeated string.

---

## 3. solution2.js (Rabin-Karp-based)

**Approach:**

- Computes hash for `b` and slides a window over repeated `a` using rolling hash.

**Time Complexity:**

- Hash computation for `b`: O(m)
- Hash computation for each window: O(1) per window, O((n \* k) - m + 1) windows (where `k` is number of repeats, at most ceil((m + n)/n) + 1)
- Substring comparison on hash match: O(m) (rare)
- **Overall:** O(n + m)

**Space Complexity:**

- Storing repeated string: O(n + m)
- Hash variables: O(1)

---

## Summary Table

| Solution     | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| solution.js  | O(n + m)        | O(n + m)         |
| solution1.js | O(n + m)        | O(m)             |
| solution2.js | O(n + m)        | O(n + m)         |

- `n = a.length`, `m = b.length`
- All solutions are efficient for typical input sizes, but `solution1.js` (KMP) is most space-efficient.
