# Complexity Analysis: Maximum Subarray Solutions

This document analyzes the time and space complexity of the two provided solutions for the Maximum Subarray problem.

---

## Solution 1: Kadane's Algorithm

**File:** solution.js

```js
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};
```

- **Time Complexity:** O(n)
  - The algorithm iterates through the array once.
- **Space Complexity:** O(1)
  - Only a constant amount of extra space is used (for variables like `maxSum` and `currentSum`).

---

## Solution 2: Divide and Conquer

**File:** solution-divide-conquer.js

```js
var maxSubArrayDivideConquer = function (nums) {
  function divideConquer(nums, left, right) {
    if (left === right) {
      return nums[left];
    }

    // Divide: find middle point (O(1) time, O(1) space)
    const mid = Math.floor((left + right) / 2);
    // Conquer: recursively find max subarray in left and right halves
    // Each call splits the array, so there are log n levels of recursion
    // Each call adds a new stack frame (O(log n) total space)
    const leftMax = divideConquer(nums, left, mid);
    const rightMax = divideConquer(nums, mid + 1, right);
    // Combine: find max subarray that crosses the middle
    // This step scans the subarray from mid to left and mid+1 to right (O(n) total per level, O(1) space)
    const crossMax = findMaxCrossingSubarray(nums, left, mid, right);

    return Math.max(leftMax, rightMax, crossMax);
  }
  function findMaxCrossingSubarray(nums, left, mid, right) {
    let leftSum = -Infinity;
    let sum = 0;
    for (let i = mid; i >= left; i--) {
      sum += nums[i];
      leftSum = Math.max(leftSum, sum);
    }
    let rightSum = -Infinity;
    sum = 0;
    for (let i = mid + 1; i <= right; i++) {
      sum += nums[i];
      rightSum = Math.max(rightSum, sum);
    }

    return leftSum + rightSum;
  }
  // Start the divide and conquer process (O(n log n) total time, O(log n) stack frames in total)
  return divideConquer(nums, 0, nums.length - 1);
};
```

- **Time Complexity:** O(n log n)
  - Each level of recursion splits the array and combines results in linear time (O(n)), with log n levels (height of the recursion tree).
  - At each level, the combine step (crossing sum) takes O(n) time, and there are log n levels, so total is O(n log n).
- **Space Complexity:** O(log n)
  - Due to recursion stack depth (log n for balanced splits). Each recursive call adds a frame to the call stack, but only a constant amount of local variables are used per call (O(1) space per call).

---

## Summary Table

| Solution           | Time Complexity | Space Complexity | Notes                        |
| ------------------ | --------------- | ---------------- | ---------------------------- |
| Kadane's Algorithm | O(n)            | O(1)             | Optimal for this problem     |
| Divide & Conquer   | O(n log n)      | O(log n)         | Useful for follow-up/variant |

**Recommendation:**

- Use Kadane's Algorithm for best performance and simplicity.
- Divide and conquer is mainly for educational purposes or specific follow-up requirements.
