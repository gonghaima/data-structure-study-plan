# Complexity Analysis: Valid Anagram Solutions

This document analyzes the time and space complexity of three common solutions for the Valid Anagram problem.

---

## Solution: Hash Map (Map Counter)
**File:** solution.js

- **Time Complexity:** O(n)
  - Each character in both strings is processed once.
- **Space Complexity:** O(k)
  - Where k is the number of unique characters (O(1) for lowercase English letters, O(k) for Unicode).

---

## Solution 1: Sorting
**File:** solution.1.js

- **Time Complexity:** O(n log n)
  - Sorting both strings dominates the runtime.
- **Space Complexity:** O(n)
  - Space for the sorted arrays/strings.

---

## Solution 2: Array Counter (Lowercase Letters)
**File:** solution.2.js

- **Time Complexity:** O(n)
  - Each character in both strings is processed once.
- **Space Complexity:** O(1)
  - Uses a fixed-size array of 26 for lowercase English letters.

---

## Summary Table

| Solution         | Time Complexity | Space Complexity | Notes                                 |
|------------------|----------------|------------------|---------------------------------------|
| Hash Map         | O(n)           | O(k) or O(1)     | General, supports Unicode if adapted  |
| Sorting          | O(n log n)     | O(n)             | Simple, but slower for large n        |
| Array Counter    | O(n)           | O(1)             | Fastest for lowercase English letters |

**Recommendation:**
- Use the array counter for lowercase English letters for best performance.
- Use the hash map approach for Unicode or general cases.
- Sorting is simple but less efficient for large strings.
