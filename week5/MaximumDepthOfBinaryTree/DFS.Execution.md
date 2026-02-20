Markdown
Copy
Code
Preview

# Max Depth of Binary Tree - Explanation

## The Code

```javascript
var maxDepth = function(root) {
    if (!root) return 0;                    // Base case

    return 1 + Math.max(                   // Recursive case
        maxDepth(root.left),               // Left subtree depth
        maxDepth(root.right)               // Right subtree depth
    );
};
Sample Data & Execution Log
Tree Structure:
plain
Copy
        3
       / \
      9  20
        /  \
       15   7
Step-by-Step Execution:
Table
Copy
Step	Call	Action	Returns
1	maxDepth(3)	Calls left...	waits
2	maxDepth(9)	Calls left (NULL)	0
3	maxDepth(9)	Calls right (NULL)	0
4	maxDepth(9)	1 + max(0,0)	1
5	maxDepth(3)	Left done, calls right...	waits
6	maxDepth(20)	Calls left...	waits
7	maxDepth(15)	Both children NULL	1
8	maxDepth(20)	Left done, calls right...	waits
9	maxDepth(7)	Both children NULL	1
10	maxDepth(20)	1 + max(1,1)	2
11	maxDepth(3)	1 + max(1,2)	3

Key Insights

Post-order Traversal: Left → Right → Root (process children before parent)
Bottom-up Calculation: Leaf nodes return 1, parents accumulate from children
Math: depth(node) = 1 + max(depth(left), depth(right))
```
