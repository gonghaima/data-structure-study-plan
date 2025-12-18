# Complexity Analysis: Shortest Subarray with Sum at Least K

This document analyzes the time and space complexity of different solutions for the Shortest Subarray with Sum at Least K problem.

---

## Solution 1: Brute Force Approach

**File:** solution1.js

- **Time Complexity:** O(n²)
  - Outer loop runs n times, inner loop runs up to n times for each iteration.
  - In worst case, checks all possible subarrays.
- **Space Complexity:** O(1)
  - Only uses constant extra space for variables.

---

## Solution 2: Optimal Deque Approach

**File:** solution2.js

- **Time Complexity:** O(n)
  - Each element is added and removed from deque at most once.
  - Prefix sum calculation is O(n).
  - Overall linear time complexity.
- **Space Complexity:** O(n)
  - Space for prefix sum array of size n+1.
  - Deque can store at most n elements in worst case.

---

## Summary Table

| Solution    | Time Complexity | Space Complexity | Notes                               |
| ----------- | --------------- | ---------------- | ----------------------------------- |
| Brute Force | O(n²)           | O(1)             | Simple but inefficient for large inputs |
| Deque       | O(n)            | O(n)             | Optimal solution using monotonic deque |

**Recommendation:**

- Use the deque approach for optimal performance, especially for large arrays.
- The deque solution handles negative numbers efficiently, unlike sliding window approaches.
- Brute force is only suitable for very small arrays or when space is extremely limited.