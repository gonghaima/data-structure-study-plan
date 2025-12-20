# Complexity Analysis: Constrained Subsequence Sum

This document analyzes the time and space complexity of four solutions for the Constrained Subsequence Sum problem.

---

## Solution: Optimal Deque Approach

**File:** solution.js

- **Time Complexity:** O(n)
  - Single pass through the array with each element added/removed from deque at most once.
  - Deque operations (push, pop, shift) are O(1) amortized.
- **Space Complexity:** O(n)
  - O(n) for the dp array and O(k) for the deque, where k ≤ n.

---

## Solution 1: Brute Force DP

**File:** solution1.js

- **Time Complexity:** O(nk)
  - For each position i, checks up to k previous positions.
  - Nested loops: outer O(n), inner O(k).
- **Space Complexity:** O(n)
  - Only the dp array is needed.

---

## Solution 2: Segment Tree Approach

**File:** solution2.js

- **Time Complexity:** O(n log n)
  - For each position, performs segment tree update and query operations.
  - Each operation takes O(log n) time.
- **Space Complexity:** O(n)
  - Segment tree requires O(4n) space, dp array requires O(n).

---

## Solution 3: Priority Queue (Max Heap)

**File:** solution3.js

- **Time Complexity:** O(n log k)
  - For each position, may perform heap operations on up to k elements.
  - Heap operations (push, pop) take O(log k) time.
- **Space Complexity:** O(k)
  - Heap stores at most k elements, dp array requires O(n).

---

## Summary Table

| Solution       | Time Complexity | Space Complexity | Notes                                    |
| -------------- | --------------- | ---------------- | ---------------------------------------- |
| Deque          | O(n)            | O(n)             | Optimal solution using sliding window    |
| Brute Force DP | O(nk)           | O(n)             | Simple but slow for large k              |
| Segment Tree   | O(n log n)      | O(n)             | Good balance, works for range queries    |
| Priority Queue | O(n log k)      | O(k)             | Space-efficient, reasonable performance  |

**Recommendation:**

- Use the **Deque approach** for optimal performance with O(n) time complexity.
- **Priority Queue** is a good alternative when space is constrained (O(k) vs O(n)).
- **Brute Force DP** is easiest to understand but inefficient for large k values.
- **Segment Tree** provides a general framework for range maximum queries but is overkill for this specific problem.