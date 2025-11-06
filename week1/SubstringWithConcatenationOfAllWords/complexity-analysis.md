# Complexity Analysis: Substring with Concatenation of All Words

This document analyzes the time and space complexity of different solutions for the Substring with Concatenation of All Words problem.

---

## Solution: Basic Sliding Window
**File:** solution.js

- **Time Complexity:** O(n * m * k)
  - n = length of string s, m = number of words, k = length of each word
  - For each starting position, checks m words of length k
- **Space Complexity:** O(m)
  - Space for word count map and seen map

---

## Solution 1: Optimized Sliding Window
**File:** solution1.js

- **Time Complexity:** O(n * k)
  - Processes each character at most twice (once when extending, once when shrinking)
  - k iterations for different starting offsets
- **Space Complexity:** O(m)
  - Space for word count map and sliding window map

---

## Solution 2: Brute Force with Helper
**File:** solution2.js

- **Time Complexity:** O(n * m * k)
  - For each starting position, validates m words of length k
  - Clean separation but same complexity as basic approach
- **Space Complexity:** O(m)
  - Space for word count map in helper function

---

## Solution 3: Rabin-Karp Rolling Hash
**File:** solution3.js

- **Time Complexity:** O(n * m + m * k)
  - Hash computation: O(m * k) for all words
  - Main loop: O(n * m) with constant hash comparisons
- **Space Complexity:** O(m)
  - Space for hash maps and word counts

---

## Summary Table

| Solution                | Time Complexity | Space Complexity | Notes                                 |
|-------------------------|----------------|------------------|---------------------------------------|
| Basic Sliding Window    | O(n * m * k)   | O(m)             | Simple implementation                 |
| Optimized Sliding Window| O(n * k)       | O(m)             | Best performance, optimal approach    |
| Brute Force Helper      | O(n * m * k)   | O(m)             | Clean code structure                  |
| Rabin-Karp Hash        | O(n * m + m*k) | O(m)             | Good for repeated pattern matching    |

**Recommendation:**
- Use the Optimized Sliding Window (solution1.js) for best performance
- Rabin-Karp is useful when hash collisions are rare
- Basic approaches are easier to understand but less efficient for large inputs