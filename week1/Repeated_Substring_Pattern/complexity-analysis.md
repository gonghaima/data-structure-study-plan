# Complexity Analysis: Repeated Substring Pattern

This document analyzes the time and space complexity of three solutions for the Repeated Substring Pattern problem.

---

## Solution: Brute-force Substring Check
**File:** solution.js

- **Time Complexity:** O(n^2)
  - For each possible substring length, checks if repeating it forms the original string.
- **Space Complexity:** O(n)
  - Space for the repeated substring.

---

## Solution 1: String Trick (s + s)
**File:** solution1.js

- **Time Complexity:** O(n)
  - Concatenation and substring search are linear in string length.
- **Space Complexity:** O(n)
  - Space for the concatenated string.

---

## Solution 2: KMP (Knuth-Morris-Pratt)
**File:** solution2.js

- **Time Complexity:** O(n)
  - Building the LPS array and checking the condition are both linear.
- **Space Complexity:** O(n)
  - Space for the LPS array.

---

## Summary Table

| Solution                | Time Complexity | Space Complexity | Notes                                 |
|-------------------------|----------------|------------------|---------------------------------------|
| Brute-force             | O(n^2)         | O(n)             | Simple, but not optimal               |
| String Trick (s + s)    | O(n)           | O(n)             | Elegant and fast                      |
| KMP                     | O(n)           | O(n)             | Efficient, uses string algorithms     |

**Recommendation:**
- Use the string trick or KMP for best performance and clarity.
- Brute-force is simple but not efficient for large strings.
