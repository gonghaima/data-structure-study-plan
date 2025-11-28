# Complexity Analysis: Evaluate Reverse Polish Notation

This document analyzes the time and space complexity of three solutions for the Evaluate Reverse Polish Notation problem.

---

## Solution: Stack-based with Switch Statement

**File:** solution.js

- **Time Complexity:** O(n)
  - Single pass through all tokens in the array.
  - Each token is processed exactly once with constant time operations.
- **Space Complexity:** O(n)
  - Stack can hold at most n/2 operands in worst case (all numbers followed by operators).

---

## Solution 1: Stack with Set and Operations Object

**File:** solution1.js

- **Time Complexity:** O(n)
  - Single pass through tokens with O(1) Set lookup and function call.
  - Same linear time complexity as basic solution.
- **Space Complexity:** O(n)
  - Stack space plus constant space for Set and operations object.

---

## Solution 2: Stack with Helper Functions

**File:** solution2.js

- **Time Complexity:** O(n)
  - Single pass with helper function calls that are O(1).
  - Array.includes() for operator check is O(1) for small constant array.
- **Space Complexity:** O(n)
  - Stack space dominates, helper functions use constant space.

---

## Summary Table

| Solution           | Time Complexity | Space Complexity | Notes                                    |
| ------------------ | --------------- | ---------------- | ---------------------------------------- |
| Switch Statement   | O(n)            | O(n)             | Most direct, efficient for interviews    |
| Set + Operations   | O(n)            | O(n)             | Clean code, good for maintainability    |
| Helper Functions   | O(n)            | O(n)             | Most readable, modular approach          |

**Recommendation:**

- Use the switch statement approach for interviews - it's direct and efficient.
- All solutions have identical time and space complexity.
- Choose based on code style preference and maintainability requirements.