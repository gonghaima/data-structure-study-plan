# Complexity Analysis: Intersection of Two Linked Lists

This document analyzes the time and space complexity of three solutions for the Intersection of Two Linked Lists problem.

---

## Solution: Empty Template

**File:** solution.js

- **Time Complexity:** N/A (template only)
- **Space Complexity:** N/A (template only)

---

## Solution 1: Two Pointers Approach (Optimal)

**File:** solution1.js

- **Time Complexity:** O(m + n)
  - Each pointer traverses at most m + n nodes
  - When pA reaches end of listA, it continues from headB
  - When pB reaches end of listB, it continues from headA
  - Both pointers meet at intersection or null after same distance
- **Space Complexity:** O(1)
  - Only uses two pointer variables

---

## Solution 2: Hash Set Approach

**File:** solution2.js

- **Time Complexity:** O(m + n)
  - First pass: traverse listA and store all nodes in set - O(m)
  - Second pass: traverse listB and check each node in set - O(n)
- **Space Complexity:** O(m)
  - Stores all nodes from listA in hash set

---

## Solution 3: Length Difference Approach

**File:** solution3.js

- **Time Complexity:** O(m + n)
  - First pass: calculate length of both lists - O(m + n)
  - Second pass: align pointers and find intersection - O(max(m, n))
- **Space Complexity:** O(1)
  - Only uses pointer variables and length counters

---

## Summary Table

| Solution         | Time Complexity | Space Complexity | Notes                                    |
| ---------------- | --------------- | ---------------- | ---------------------------------------- |
| Two Pointers     | O(m + n)        | O(1)             | Optimal solution, elegant implementation |
| Hash Set         | O(m + n)        | O(m)             | Intuitive but uses extra space          |
| Length Difference| O(m + n)        | O(1)             | Clear logic, requires two passes         |

**Recommendation:**

- Use the Two Pointers approach (solution1.js) for optimal performance
- Hash Set approach is more intuitive but uses extra space
- Length Difference approach is easier to understand for beginners