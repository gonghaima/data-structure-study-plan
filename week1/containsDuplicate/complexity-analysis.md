# Complexity Analysis: containsDuplicate Solutions

This document analyzes the time and space complexity of the three provided solutions for the `containsDuplicate` problem.

---

## Solution 1: Hash Set (Iterative)

**File:** solution.1.js

```js
var containsDuplicate = function (nums) {
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }
    seen.add(nums[i]);
  }
  return false;
};
```

- **Time Complexity:** O(n)
  - Each element is checked and (at most) inserted into the set once.
- **Space Complexity:** O(n)
  - In the worst case (no duplicates), all elements are stored in the set.

---

## Solution 2: Set Size Comparison

**File:** solution.js

```js
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};
```

- **Time Complexity:** O(n)
  - Creating a set from the array requires iterating through all elements.
- **Space Complexity:** O(n)
  - The set may store all elements if there are no duplicates.

---

## Solution 3: Sorting and Scanning

**File:** solution.2.js

```js
var containsDuplicate = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) {
      return true;
    }
  }
  return false;
};
```

- **Time Complexity:** O(n log n)
  - Sorting the array dominates the runtime.
- **Space Complexity:** O(n)
  - A copy of the array is made for sorting.

---

## Summary Table

| Solution         | Time Complexity | Space Complexity | Notes                        |
| ---------------- | --------------- | ---------------- | ---------------------------- |
| Hash Set         | O(n)            | O(n)             | Fastest for large inputs     |
| Set Size Compare | O(n)            | O(n)             | Most concise                 |
| Sorting & Scan   | O(n log n)      | O(n)             | No extra data structure used |

**Recommendation:**

- Use the hash set or set size comparison for best performance.
- Sorting is less optimal but still valid.
