# Complexity Analysis: Top K Frequent Elements

This document analyzes the time and space complexity of three common solutions for the Top K Frequent Elements problem.

---

## Solution: Bucket Sort

**File:** solution.js

- **Time Complexity:** O(n)
  - Counting frequencies: O(n)
  - Bucket allocation and collection: O(n)
- **Space Complexity:** O(n)
  - Space for frequency map and buckets array.

---

## Solution 1: Min Heap

**File:** solution1.js

- **Time Complexity:** O(n log k)
  - Counting frequencies: O(n)
  - Heap operations: O(n log k) for k-sized heap.
- **Space Complexity:** O(n)
  - Space for frequency map and heap (up to k elements).

---

## Solution 2: HashMap + Sort

**File:** solution2.js

- **Time Complexity:** O(n log n)
  - Counting frequencies: O(n)
  - Sorting unique elements: O(n log n)
- **Space Complexity:** O(n)
  - Space for frequency map and sorted array.

---

## Summary Table

| Solution         | Time Complexity | Space Complexity | Notes                                 |
|-----------------|-----------------|------------------|---------------------------------------|
| Bucket Sort      | O(n)            | O(n)             | Fastest, but needs extra bucket space |
| Min Heap         | O(n log k)      | O(n)             | Efficient for small k                 |
| HashMap + Sort   | O(n log n)      | O(n)             | Simple, but slower for large n        |

**Recommendation:**

- Use the bucket sort approach for best performance when n is large and k is not close to n.
- Min heap is efficient when k is much smaller than n.
- HashMap + sort is easy to implement but not optimal for large inputs.
