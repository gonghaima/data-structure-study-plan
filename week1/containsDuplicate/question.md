# 217. Contains Duplicate

**Difficulty:** Easy  
**Status:** Solved  
**Topics:** Array, Hash Table, Sorting  
**Companies:** Amazon, Microsoft, Google, Apple, Facebook

## Problem Description

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

## Examples

### Example 1:
```
Input: nums = [1,2,3,1]
Output: true
Explanation: The element 1 occurs at the indices 0 and 3.
```

### Example 2:
```
Input: nums = [1,2,3,4]
Output: false
Explanation: All elements are distinct.
```

### Example 3:
```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Key Points

- Return **boolean value** (true/false)
- Check if **any value appears at least twice**
- All elements must be **distinct** to return false
- Array can contain **negative numbers**
- Single element arrays always return **false**

## Approach Hints

- **Hash Set Approach:** Use Set to track seen numbers (O(n) time, O(n) space)
- **Sorting Approach:** Sort array and check adjacent elements (O(n log n) time, O(1) space)
- **Brute Force:** Check all pairs (O(n^2) time) - not optimal
- **Key Insight:** Stop as soon as first duplicate is found