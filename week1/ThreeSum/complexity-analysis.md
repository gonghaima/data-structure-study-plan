# 3Sum - Complexity Analysis

## Time Complexity Analysis

### 1. Two Pointer Approach - O(n²)
- **Sorting:** O(n log n)
- **Main loop:** O(n) iterations
- **Inner two-pointer:** O(n) for each iteration
- **Total:** O(n log n) + O(n²) = **O(n²)**

### 2. Brute Force - O(n³)
- **Three nested loops:** O(n) × O(n) × O(n) = **O(n³)**
- **Sorting for duplicates:** O(n log n)
- **Total:** **O(n³)**

### 3. HashMap - O(n²)
- **Sorting:** O(n log n)
- **Outer loop:** O(n)
- **Inner loop with hash operations:** O(n) × O(1) = O(n)
- **Total:** O(n log n) + O(n²) = **O(n²)**

### 4. No Sort - O(n²)
- **Outer loop:** O(n)
- **Inner loop:** O(n)
- **Set operations:** O(1) average
- **Total:** **O(n²)**

### 5. Optimized Two Pointer - O(n²)
- Same as regular two-pointer but with early termination optimizations
- **Best case:** O(n) when all numbers are positive
- **Average/Worst case:** **O(n²)**

### 6. Divide and Conquer - O(n² log n)
- **Sorting:** O(n log n)
- **Main loop:** O(n)
- **TwoSum for each element:** O(n)
- **Total:** O(n log n) + O(n) × O(n) = **O(n² log n)**

## Space Complexity Analysis

### 1. Two Pointer - O(1)
- Only uses a few variables for pointers and temporary storage
- **Space:** **O(1)** (excluding output array)

### 2. Brute Force - O(1)
- Only uses loop variables
- **Space:** **O(1)** (excluding output array)

### 3. HashMap - O(n)
- Uses a Set to store seen elements
- **Space:** **O(n)**

### 4. No Sort - O(n)
- Uses Set for seen elements and Set for result deduplication
- **Space:** **O(n)**

### 5. Optimized Two Pointer - O(1)
- Same as regular two-pointer
- **Space:** **O(1)** (excluding output array)

### 6. Divide and Conquer - O(log n)
- Recursion stack depth
- **Space:** **O(log n)**

## Performance Characteristics

### Best for Production
- **Optimized Two Pointer:** Best practical performance with early termination
- **Two Pointer:** Standard optimal solution

### Best for Learning
- **Brute Force:** Easiest to understand
- **HashMap:** Good introduction to hash-based solutions

### Best for Interviews
- **Two Pointer:** Most commonly expected solution
- **HashMap:** Good alternative to demonstrate different thinking

### Memory Constrained Environments
- **Two Pointer / Optimized Two Pointer:** O(1) space complexity

### When Input Cannot Be Modified
- **No Sort:** Preserves original array order
- **HashMap:** Can work with immutable input

## Practical Performance Notes

1. **Constant Factors:** The optimized two-pointer often performs 2-3x better than the basic version due to early termination
2. **Cache Locality:** Two-pointer approaches have better cache performance than hash-based solutions
3. **Memory Allocation:** Hash-based solutions may trigger garbage collection more frequently
4. **Input Size Sensitivity:** 
   - Brute force becomes impractical beyond ~100 elements
   - Other O(n²) solutions scale well to thousands of elements
   - Divide and conquer has higher overhead for small inputs