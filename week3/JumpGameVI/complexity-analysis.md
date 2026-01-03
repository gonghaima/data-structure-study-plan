# Complexity Analysis: Jump Game VI

This document analyzes the time and space complexity of three solutions for the Jump Game VI problem.

---

## Solution: Monotonic Deque Approach

**File:** solution.js

- **Time Complexity:** O(n)
  - Each element is added and removed from deque at most once.
  - All deque operations are amortized O(1).
- **Space Complexity:** O(k)
  - Deque stores at most k elements.
  - DP array uses O(n) space.

---

## Solution 1: Brute Force DP

**File:** solution1.js

- **Time Complexity:** O(nk)
  - For each position i, checks up to k previous positions.
  - Worst case: O(nk) comparisons.
- **Space Complexity:** O(n)
  - DP array to store maximum scores.

---

## Solution 2: Priority Queue Approach

**File:** solution2.js

- **Time Complexity:** O(n log k)
  - Each element involves priority queue operations.
  - Queue maintains at most k elements.
- **Space Complexity:** O(k)
  - Priority queue stores at most k elements.
  - DP array uses O(n) space.

---

## Summary Table

| Solution         | Time Complexity | Space Complexity | Notes                                    |
| ---------------- | --------------- | ---------------- | ---------------------------------------- |
| Monotonic Deque  | O(n)            | O(k)             | Optimal, efficient for all inputs       |
| Brute Force DP   | O(nk)           | O(n)             | Simple, but slow for large k            |
| Priority Queue   | O(n log k)      | O(k)             | Good balance, easier to understand      |

**Recommendation:**

- Use the monotonic deque approach for best performance, especially for large inputs.
- Priority queue is a good middle ground with cleaner implementation.
- Brute force is simple but inefficient for large k values.