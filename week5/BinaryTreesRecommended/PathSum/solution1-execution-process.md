# Execution Process: Path Sum (Recursive DFS)

This document traces the step-by-step execution of the recursive DFS solution for the Path Sum problem.

## Input Example
```
Tree: [5,4,8,11,null,13,4,7,2,null,null,null,1]
Target Sum: 22

Tree Structure:
       5
      / \
     4   8
    /   / \
   11  13  4
  / \      \
 7   2      1
```

## Step-by-Step Execution

### Call 1: hasPathSum(root=5, targetSum=22)
- `root` is not null ✓
- `root` is not a leaf (has children) ✓
- `remainingSum = 22 - 5 = 17`
- Return: `hasPathSum(left=4, 17) || hasPathSum(right=8, 17)`

### Call 2: hasPathSum(root=4, targetSum=17)
- `root` is not null ✓
- `root` is not a leaf (has left child) ✓
- `remainingSum = 17 - 4 = 13`
- Return: `hasPathSum(left=11, 13) || hasPathSum(right=null, 13)`

### Call 3: hasPathSum(root=11, targetSum=13)
- `root` is not null ✓
- `root` is not a leaf (has children) ✓
- `remainingSum = 13 - 11 = 2`
- Return: `hasPathSum(left=7, 2) || hasPathSum(right=2, 2)`

### Call 4: hasPathSum(root=7, targetSum=2)
- `root` is not null ✓
- `root` is a leaf (no children) ✓
- Check: `7 === 2` → **false**
- Return: **false**

### Call 5: hasPathSum(root=2, targetSum=2)
- `root` is not null ✓
- `root` is a leaf (no children) ✓
- Check: `2 === 2` → **true**
- Return: **true**

### Back to Call 3:
- `hasPathSum(left=7, 2)` returned **false**
- `hasPathSum(right=2, 2)` returned **true**
- `false || true` = **true**
- Return: **true**

### Back to Call 2:
- `hasPathSum(left=11, 13)` returned **true**
- Since we use `||`, we don't need to evaluate the right side
- Return: **true**

### Back to Call 1:
- `hasPathSum(left=4, 17)` returned **true**
- Since we use `||`, we don't need to evaluate the right side
- Return: **true**

## Final Result: **true**

## Path Found
The algorithm found the path: **5 → 4 → 11 → 2** with sum = 22

## Key Observations
1. **Early termination**: Due to `||` operator, once a valid path is found, remaining branches aren't explored
2. **Leaf check**: Only leaf nodes compare their value with the remaining target sum
3. **Recursive reduction**: Each call reduces the target sum by the current node's value
4. **Backtracking**: The recursion naturally backtracks when paths don't lead to valid solutions