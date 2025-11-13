# Complexity Analysis: Merge Two Sorted Lists

This document analyzes the time and space complexity of different solutions for the Merge Two Sorted Lists problem.

---

## Solution 1: Iterative with Dummy Node
**Files:** solution.js, solution1.js

- **Time Complexity:** O(m + n)
  - Where m and n are the lengths of list1 and list2 respectively.
  - Each node is visited exactly once during the merge process.
- **Space Complexity:** O(1)
  - Only uses a constant amount of extra space for pointers and dummy node.
  - The result list reuses existing nodes without creating new ones.

---

## Solution 2: Recursive Approach
**File:** solution2.js

- **Time Complexity:** O(m + n)
  - Same as iterative - each node visited once.
  - Recursive calls traverse both lists completely.
- **Space Complexity:** O(m + n)
  - Due to the call stack depth in recursion.
  - Worst case: stack depth equals the total number of nodes.

---

## Solution 3: Iterative without Dummy Node
**File:** solution3.js

- **Time Complexity:** O(m + n)
  - Each node is visited exactly once during the merge process.
- **Space Complexity:** O(1)
  - Uses constant extra space, slightly more efficient than dummy node approach.
  - More complex logic to handle head selection.

---

## Summary Table

| Solution                | Time Complexity | Space Complexity | Notes                                 |
|-------------------------|----------------|------------------|---------------------------------------|
| Iterative (Dummy)       | O(m + n)       | O(1)             | Clean code, recommended for interviews|
| Recursive               | O(m + n)       | O(m + n)         | Elegant but uses call stack memory    |
| Iterative (No Dummy)    | O(m + n)       | O(1)             | Most space efficient, more complex    |

**Recommendation:**
- Use iterative with dummy node (solution.js/solution1.js) for interviews - clean and optimal.
- Recursive approach (solution2.js) is intuitive but has higher space complexity.
- No dummy approach (solution3.js) saves one node allocation but adds complexity.