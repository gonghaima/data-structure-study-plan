# Complexity Analysis: Group Anagrams

This document analyzes the time and space complexity of different solutions for the Group Anagrams problem.

---

## Solution 1: Sorting Approach

**File:** solution1.js

- **Time Complexity:** O(n * k log k)
  - n = number of strings, k = maximum length of a string
  - For each string, sorting takes O(k log k) time
  - Total: O(n * k log k)
- **Space Complexity:** O(n * k)
  - Space for the hash map storing all strings
  - Each string takes O(k) space

---

## Solution 2: Character Counting Approach

**File:** solution2.js

- **Time Complexity:** O(n * k)
  - n = number of strings, k = maximum length of a string
  - For each string, counting characters takes O(k) time
  - Creating key from count array takes O(26) = O(1) time
  - Total: O(n * k)
- **Space Complexity:** O(n * k)
  - Space for the hash map storing all strings
  - Additional O(26) = O(1) space for count array per string

---

## Summary Table

| Solution           | Time Complexity | Space Complexity | Notes                                    |
| ------------------ | --------------- | ---------------- | ---------------------------------------- |
| Sorting            | O(n * k log k)  | O(n * k)         | Simple implementation, slower for long strings |
| Character Counting | O(n * k)        | O(n * k)         | Optimal time complexity, more space efficient |

**Recommendation:**

- Use Character Counting approach for best performance, especially when strings are long
- Sorting approach is simpler to implement and understand
- Both approaches have the same space complexity for storing results