# Complexity Analysis: Linked List Cycle

This document analyzes the time and space complexity of different solutions for the Linked List Cycle problem.

---

## Solution: Floyd's Cycle Detection Algorithm
**File:** solution.js

- **Time Complexity:** O(n)
  - In the worst case, the fast pointer traverses the entire list once.
  - If there's a cycle, the pointers will meet within n iterations.
- **Space Complexity:** O(1)
  - Only uses two pointer variables (slow and fast).
  - No additional data structures required.

---

## Solution 1: Floyd's Cycle Detection Algorithm (Alternative)
**File:** solution1.js

- **Time Complexity:** O(n)
  - Same approach as solution.js with identical performance.
  - Fast pointer traverses at most the entire list once.
- **Space Complexity:** O(1)
  - Uses only two pointer variables with no extra memory.

---

## Solution 2: Hash Set Approach
**File:** solution2.js

- **Time Complexity:** O(n)
  - Visits each node at most once.
  - Hash set operations (add/has) are O(1) average case.
- **Space Complexity:** O(n)
  - Stores up to n node references in the hash set.
  - Space grows linearly with input size.

---

## Solution 3: Node Marking Approach
**File:** solution3.js

- **Time Complexity:** O(n)
  - Visits each node at most once.
  - Constant time operations per node.
- **Space Complexity:** O(1)
  - No additional data structures used.
  - **Note:** Destructive approach that modifies the original list.

---

## Summary Table

| Solution                | Time Complexity | Space Complexity | Notes                                 |
|-------------------------|----------------|------------------|---------------------------------------|
| Two Pointers (Floyd's)  | O(n)           | O(1)             | Optimal, non-destructive              |
| Two Pointers (Alt)      | O(n)           | O(1)             | Same as above, identical approach     |
| Hash Set                | O(n)           | O(n)             | Simple but uses extra memory          |
| Node Marking            | O(n)           | O(1)             | Space efficient but destructive       |

**Recommendation:**
- Use Floyd's Cycle Detection (solution.js or solution1.js) for optimal performance.
- Hash Set approach is intuitive but uses O(n) extra space.
- Node Marking is space-efficient but modifies the original data structure.