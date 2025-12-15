# Complexity Analysis: Next Greater Element I

This document analyzes the time and space complexity of different solutions for the Next Greater Element I problem.

---

## Solution 1: Brute Force Approach

**File:** solution1.js

- **Time Complexity:** O(n * m)
  - For each element in nums1 (n elements), we scan through nums2 (m elements).
  - Worst case: O(n * m) when all elements need full scan.
- **Space Complexity:** O(1)
  - Only uses constant extra space for variables (excluding output array).

---

## Solution 2: Stack + HashMap Approach

**File:** solution2.js

- **Time Complexity:** O(n + m)
  - Single pass through nums2 to build the map: O(m)
  - Single pass through nums1 to get results: O(n)
  - Each element in nums2 is pushed and popped at most once.
- **Space Complexity:** O(m)
  - HashMap stores at most m entries for nums2 elements.
  - Stack stores at most m elements in worst case.

---

## Summary Table

| Solution    | Time Complexity | Space Complexity | Notes                               |
| ----------- | --------------- | ---------------- | ----------------------------------- |
| Brute Force | O(n * m)        | O(1)             | Simple but inefficient for large inputs |
| Stack + Map | O(n + m)        | O(m)             | Optimal time, uses monotonic stack pattern |

**Recommendation:**

- Use the Stack + HashMap approach for optimal performance.
- The monotonic stack pattern is a key technique for "next greater element" problems.
- Space trade-off is worthwhile for the significant time complexity improvement.