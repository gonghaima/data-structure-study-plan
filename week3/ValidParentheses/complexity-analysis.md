# Complexity Analysis: Valid Parentheses

This document analyzes the time and space complexity of different solutions for the Valid Parentheses problem.

---

## Solution: Stack-based Approach

**File:** solution1.js

- **Time Complexity:** O(n)
  - Single pass through the string, each character processed once.
  - Stack operations (push/pop) are O(1).
- **Space Complexity:** O(n)
  - In worst case, all opening brackets are pushed to stack.
  - Stack can grow up to n/2 elements for valid strings.

---

## Solution 2: String Replacement Approach

**File:** solution2.js

- **Time Complexity:** O(n²)
  - While loop can run up to n/2 times.
  - Each string replacement operation is O(n).
  - Overall: O(n²) in worst case.
- **Space Complexity:** O(n)
  - String replacement creates new string objects.
  - Multiple intermediate strings during processing.

---

## Summary Table

| Solution         | Time Complexity | Space Complexity | Notes                                    |
| ---------------- | --------------- | ---------------- | ---------------------------------------- |
| Stack-based      | O(n)            | O(n)             | Optimal, single pass, efficient         |
| String replacement | O(n²)          | O(n)             | Simple but inefficient for large inputs |

**Recommendation:**

- Use the stack-based approach for optimal performance.
- String replacement is intuitive but not suitable for large inputs due to quadratic time complexity.