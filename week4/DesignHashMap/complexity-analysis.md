# Complexity Analysis: Design HashMap

This document analyzes the time and space complexity of two solutions for the Design HashMap problem.

---

## Solution: Direct Addressing (Array)

**File:** solution.js

- **Time Complexity:** O(1)
  - `put`, `get`, and `remove` use direct index access by key.
- **Space Complexity:** O(U)
  - Uses an array of size `U = 1,000,001` to cover all possible keys.

---

## Solution 1: Chaining (Array of Buckets)

**File:** solution1.js

- **Time Complexity:** Average O(1), Worst O(n)
  - Hashing is O(1), but each operation may scan a bucket.
  - With good distribution, bucket size stays small on average.
  - In the worst case (many collisions), a bucket can contain up to `n` keys.
- **Space Complexity:** O(n + b)
  - `n` for stored key-value pairs and `b` for the fixed bucket array (`b = 1009`).

---

## Summary Table

| Solution          | Time Complexity          | Space Complexity | Notes                                             |
| ----------------- | ------------------------ | ---------------- | ------------------------------------------------- |
| Direct Addressing | O(1)                     | O(U)             | Fast operations, but uses large fixed memory      |
| Chaining          | Avg O(1), Worst O(n)     | O(n + b)         | More memory-efficient for sparse usage of key set |

**Recommendation:**

- Use direct addressing when key range is small and bounded, and memory is acceptable.
- Use chaining when you want scalable memory usage and good average-case performance.
