# Complexity Analysis: Product of Array Except Self

This document analyzes the time and space complexity of three solutions for the Product of Array Except Self problem.

---

## Solution: Prefix & Suffix Product (Optimal, No Division)

**File:** solution.js

- **Time Complexity:** O(n)
  - Two passes through the array (left-to-right and right-to-left).
- **Space Complexity:** O(1) extra (excluding the output array)
  - Only a few variables are used for prefix and suffix products.

---

## Solution 1: Division-Based (For Learning Only)

**File:** solution.1.js

- **Time Complexity:** O(n)
  - One pass to compute the total product, another to build the result.
- **Space Complexity:** O(1) extra
  - Only a few variables for product and zero count.
- **Note:** Not allowed by the problem statement. Fails for multiple zeros.

---

## Solution 2: Brute-Force

**File:** solution.2.js

- **Time Complexity:** O(n²)
  - For each index, multiplies all other elements.
- **Space Complexity:** O(1) extra (excluding the output array)
  - Only a few variables for the product.
- **Note:** Not efficient, for educational purposes only.

---

## Summary Table

| Solution                | Time Complexity | Space Complexity | Notes                                 |
| ----------------------- | --------------- | ---------------- | ------------------------------------- |
| Prefix & Suffix Product | O(n)            | O(1) extra       | Best, no division, handles zeros      |
| Division-Based          | O(n)            | O(1) extra       | Not allowed, fails for multiple zeros |
| Brute-Force             | O(n²)           | O(1) extra       | Not efficient, for learning only      |

**Recommendation:**

- Use the prefix & suffix product approach for interviews and production code.
- Division-based and brute-force are for learning and should not be used in practice.
