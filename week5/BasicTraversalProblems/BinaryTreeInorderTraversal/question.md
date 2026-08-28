94. Binary Tree Inorder Traversal

**Difficulty:** Easy  
**Status:** Unsolved  
**Topics:** Stack, Tree, Depth-First Search, Binary Tree  

## Problem Description
Given the root of a binary tree, return the inorder traversal of its nodes' values.

## Examples
### Example 1:
```
Input: root = [1,null,2,3]
Output: [1,3,2]
```

### Example 2:
```
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,2,6,5,7,1,3,9,8]
```

### Example 3:
```
Input: root = []
Output: []
```

### Example 4:
```
Input: root = [1]
Output: [1]
```

## Constraints
- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100

## Key Points
- Inorder traversal: left -> root -> right
- Follow up: Recursive solution is trivial, could you do it iteratively?

## Approach Hints
- **Approach 1:** Recursive DFS (O(n) time, O(n) space)
- **Approach 2:** Iterative using stack (O(n) time, O(n) space)
- **Approach 3:** Morris Traversal (O(n) time, O(1) space)
- **Key Insight:** Use a stack to simulate the recursive call stack