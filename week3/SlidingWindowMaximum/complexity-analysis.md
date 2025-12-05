# Complexity Analysis: Sliding Window Maximum

This document analyzes the time and space complexity of several solutions for the Sliding Window Maximum problem.

---

## Solution: Brute-force Approach

**File:** solution.js

- **Time Complexity:** O(nk)
  - For each window of size k, finds the maximum by scanning all k elements.
  - For n - k + 1 windows, total comparisons: O(nk).
- **Space Complexity:** O(n - k + 1) ≈ O(n)
  - Stores the result array of size n - k + 1.

**Explanation:**
This approach iterates over every possible window and computes the maximum by checking each element in the window. Simple but inefficient for large n and k.

---

## Solution 2: Deque (Monotonic Queue) Approach

**File:** solution1.js

- **Time Complexity:** O(n)
  - Each element is pushed and popped from the deque at most once.
  - All operations inside the loop are amortized O(1).
- **Space Complexity:** O(k)
  - The deque stores at most k indices at any time.
  - The result array is O(n).

**Explanation:**
This approach uses a double-ended queue (deque) to keep track of indices of useful elements for each window. The deque always stores indices in decreasing order of their corresponding values, ensuring the front is always the maximum for the current window. This is the optimal and most common solution for this problem.

---

## Solution 3: (Optional) Max-Heap Approach

**File:** solution2.js

- **Time Complexity:** O(n log k)
  - Each insertion and removal from the heap takes O(log k).
- **Space Complexity:** O(k)
  - The heap stores up to k elements.

**Explanation:**
A max-heap can be used to keep track of the maximum in the current window. However, removing elements not in the window can be tricky and less efficient than the deque approach.

---
