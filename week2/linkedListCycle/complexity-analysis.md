# Complexity Analysis: Linked List Cycle

This document analyzes the time and space complexity of solutions for the Linked List Cycle problem.

---

## Solution: Floyd's Cycle Detection Algorithm (Two Pointers)
**File:** solution.js

- **Time Complexity:** O(n)
  - In the worst case, the fast pointer traverses the entire list once.
  - If there's a cycle, the pointers will meet within n steps.
- **Space Complexity:** O(1)
  - Only uses two pointer variables, constant extra space.

---

## Alternative Solution: Hash Set Approach

- **Time Complexity:** O(n)
  - Visit each node at most once.
- **Space Complexity:** O(n)
  - Store up to n nodes in the hash set.

---

## Summary Table

| Solution                | Time Complexity | Space Complexity | Notes                                 |
|-------------------------|----------------|------------------|---------------------------------------|
| Two Pointers (Floyd's)  | O(n)           | O(1)             | Optimal space, meets follow-up req.   |
| Hash Set                | O(n)           | O(n)             | Simple but uses extra space           |

**Recommendation:**
- Use Floyd's Cycle Detection Algorithm for optimal O(1) space complexity as required by the follow-up question.