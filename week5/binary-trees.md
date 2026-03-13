# Binary Trees Problems - Week 5

## 🎯 Fifth Week - Binary Trees

### Problem 1: Binary Tree Inorder Traversal ⭐ (Easy - Perfect Starting Point)

**LeetCode #94**

- **Why start here:** Fundamental tree traversal and recursion pattern
- **Key concepts:** Inorder traversal (left-root-right), recursion vs iteration, stack-based approach
- **Time to solve:** 20-30 minutes
- **Expected complexity:** O(n) time, O(h) space

### Problem 2: Binary Tree Preorder Traversal ⭐ (Easy)

**LeetCode #144**

- **Why next:** Another basic traversal pattern to master
- **Key concepts:** Preorder traversal (root-left-right), iterative with stack
- **Time to solve:** 20-30 minutes
- **Expected complexity:** O(n) time, O(h) space

### Problem 3: Binary Tree Postorder Traversal ⭐ (Easy)

**LeetCode #145**

- **Why important:** Completes the three fundamental traversal patterns
- **Key concepts:** Postorder traversal (left-right-root), two-stack approach
- **Time to solve:** 25-35 minutes
- **Expected complexity:** O(n) time, O(h) space

### Problem 4: Maximum Depth of Binary Tree ⭐ (Easy)

**LeetCode #104**

- **Why crucial:** Introduction to tree properties and recursive thinking
- **Key concepts:** Height calculation, DFS vs BFS approaches
- **Time to solve:** 20-30 minutes
- **Expected complexity:** O(n) time, O(h) space

### Problem 5: Validate Binary Search Tree ⭐⭐ (Medium)

**LeetCode #98**

- **Why essential:** Understanding BST properties and range validation
- **Key concepts:** BST invariant, range checking, inorder traversal property
- **Time to solve:** 35-45 minutes
- **Expected complexity:** O(n) time, O(h) space

---

## 🧠 Core Concepts to Master

### Tree Structure and Terminology
- **Node:** Contains value and pointers to children
- **Root:** Top node with no parent
- **Leaf:** Node with no children
- **Height:** Longest path from node to leaf
- **Depth:** Distance from root to node
- **Balanced:** Height difference ≤ 1 for all nodes

### Tree Traversal Methods
- **Inorder (Left-Root-Right):** Gives sorted order for BST
- **Preorder (Root-Left-Right):** Used for tree copying
- **Postorder (Left-Right-Root):** Used for tree deletion
- **Level-order (BFS):** Process nodes level by level

### Binary Search Tree (BST) Properties
- Left subtree values < root value
- Right subtree values > root value
- Both subtrees are also BSTs
- Inorder traversal gives sorted sequence

### Recursion Patterns
- **Base case:** Handle null or leaf nodes
- **Recursive case:** Process current node and recurse on children
- **Return value:** Aggregate results from subtrees

---

## 📋 Study Approach for Each Problem

### Step 1: Visualize the Tree (10-15 minutes)
- Draw example trees
- Trace traversal order
- Identify base cases (null, leaf, single node)

### Step 2: Choose Approach (10-15 minutes)
- Recursive vs iterative
- DFS vs BFS
- Additional data structures needed (stack, queue)

### Step 3: Implement (20-30 minutes)
- Code the solution step by step
- Handle null pointers carefully
- Test with drawn examples

### Step 4: Optimize & Review (10-15 minutes)
- Verify time/space complexity
- Consider Morris traversal for O(1) space
- Compare recursive vs iterative trade-offs

---

## 🎯 This Week's Goal

Complete these 5 problems over 4-5 days, spending about 1-1.5 hours per problem. This will give you mastery of:

- All three DFS traversal patterns
- Recursive tree algorithms
- BST properties and validation
- Tree height and depth calculations

---

## 📝 Related Problems

### Basic Traversal Problems
- **Binary Tree Level Order Traversal** (LeetCode #102)
- **Binary Tree Zigzag Level Order Traversal** (LeetCode #103)
- **Binary Tree Right Side View** (LeetCode #199)
- **Binary Tree Vertical Order Traversal** (LeetCode #314)
- **N-ary Tree Preorder Traversal** (LeetCode #589)
- **N-ary Tree Postorder Traversal** (LeetCode #590)
- **N-ary Tree Level Order Traversal** (LeetCode #429)

### Tree Properties
- **Minimum Depth of Binary Tree** (LeetCode #111)
- **Balanced Binary Tree** (LeetCode #110)
- **Diameter of Binary Tree** (LeetCode #543)
- **Symmetric Tree** (LeetCode #101)
- **Same Tree** (LeetCode #100)
- **Subtree of Another Tree** (LeetCode #572)
- **Count Complete Tree Nodes** (LeetCode #222)

### Path Problems
- **Binary Tree Paths** (LeetCode #257)
- **Path Sum** (LeetCode #112)
- **Path Sum II** (LeetCode #113)
- **Path Sum III** (LeetCode #437)
- **Sum Root to Leaf Numbers** (LeetCode #129)
- **Binary Tree Maximum Path Sum** (LeetCode #124)

### BST Problems
- **Search in a Binary Search Tree** (LeetCode #700)
- **Insert into a Binary Search Tree** (LeetCode #701)
- **Delete Node in a BST** (LeetCode #450)
- **Kth Smallest Element in a BST** (LeetCode #230)
- **Convert Sorted Array to Binary Search Tree** (LeetCode #108)
- **Convert BST to Greater Tree** (LeetCode #538)
- **Recover Binary Search Tree** (LeetCode #99)

### Construction Problems
- **Construct Binary Tree from Preorder and Inorder** (LeetCode #105)
- **Construct Binary Tree from Inorder and Postorder** (LeetCode #106)
- **Construct Binary Tree from Preorder and Postorder** (LeetCode #889)
- **Maximum Binary Tree** (LeetCode #654)
- **Serialize and Deserialize Binary Tree** (LeetCode #297)

### Lowest Common Ancestor (LCA)
- **Lowest Common Ancestor of a Binary Tree** (LeetCode #236)
- **Lowest Common Ancestor of a BST** (LeetCode #235)
- **Lowest Common Ancestor of Deepest Leaves** (LeetCode #1123)

### Advanced Tree Problems
- **Flatten Binary Tree to Linked List** (LeetCode #114)
- **Populating Next Right Pointers** (LeetCode #116)
- **Populating Next Right Pointers II** (LeetCode #117)
- **Binary Tree Cameras** (LeetCode #968)
- **Distribute Coins in Binary Tree** (LeetCode #979)
- **House Robber III** (LeetCode #337)

---

## 🔑 Key Patterns to Recognize

### Pattern 1: DFS Traversal
- Use recursion or explicit stack
- Process nodes in specific order
- Examples: All traversal problems

### Pattern 2: Tree Properties
- Calculate height, depth, or diameter
- Use post-order traversal pattern
- Examples: Max Depth, Balanced Tree

### Pattern 3: Path Finding
- Track path from root to node
- Use backtracking or recursion
- Examples: Path Sum, Binary Tree Paths

### Pattern 4: BST Operations
- Leverage sorted property
- Use inorder traversal
- Examples: Validate BST, Kth Smallest

### Pattern 5: Tree Construction
- Use traversal arrays to rebuild
- Identify root and split subtrees
- Examples: Construct from Preorder/Inorder

### Pattern 6: Level-Order Processing
- Use BFS with queue
- Process nodes level by level
- Examples: Level Order Traversal, Right Side View

---

## 💡 Common Pitfalls to Avoid

1. **Null pointer errors:** Always check if node is null before accessing
2. **Base case handling:** Missing or incorrect base cases in recursion
3. **BST validation:** Using only local comparison instead of range checking
4. **Height vs depth confusion:** Height is bottom-up, depth is top-down
5. **Traversal order mistakes:** Mixing up pre/in/post order sequences
6. **Stack overflow:** Deep recursion on skewed trees
7. **Modifying tree structure:** Accidentally changing pointers during traversal

---

## 🔬 Time and Space Complexity

### Common Complexities
- **Traversal:** O(n) time, O(h) space (recursion stack)
- **Search in BST:** O(h) time, O(1) space (iterative)
- **Level-order:** O(n) time, O(w) space (w = max width)
- **Morris Traversal:** O(n) time, O(1) space

### Space Optimization
- **Recursive:** O(h) space for call stack
- **Iterative:** O(h) space for explicit stack
- **Morris:** O(1) space but modifies tree temporarily

---

## 🚀 Advanced Topics After These 5

Once comfortable with the basics, explore:

- **Segment Trees:** Range query optimization
- **Fenwick Trees (BIT):** Prefix sum queries
- **Trie:** Prefix tree for strings
- **AVL Trees:** Self-balancing BST
- **Red-Black Trees:** Another self-balancing BST
- **B-Trees:** Multi-way search trees for databases

---

## 📊 Progress Tracking

- [ ] Binary Tree Inorder Traversal
- [ ] Binary Tree Preorder Traversal
- [ ] Binary Tree Postorder Traversal
- [ ] Maximum Depth of Binary Tree
- [ ] Validate Binary Search Tree

**Target:** Complete all 5 problems with both recursive and iterative solutions where applicable.

---

## 🎓 Key Takeaways

### When to Use DFS
- Need to explore all paths
- Tree traversal problems
- Path sum calculations
- Recursive solutions preferred

### When to Use BFS
- Level-order processing
- Shortest path in unweighted tree
- Finding nodes at specific level
- Right/left side view

### Recursive vs Iterative
- **Recursive:** Cleaner code, uses call stack
- **Iterative:** More control, avoids stack overflow
- **Morris:** Optimal space but complex

### BST Advantages
- O(log n) search in balanced tree
- Inorder gives sorted sequence
- Efficient insert/delete operations
- Range queries possible

---

## 🔧 Common Tree Node Definition

```javascript
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
```

---

## 📚 Study Resources

### Visualization Tools
- VisuAlgo: Tree visualization
- LeetCode Playground: Test with custom trees
- Draw.io: Sketch tree structures

### Key Algorithms to Master
1. **DFS Traversals:** Inorder, Preorder, Postorder
2. **BFS Traversal:** Level-order
3. **Morris Traversal:** O(1) space traversal
4. **BST Operations:** Search, Insert, Delete
5. **Tree Construction:** From traversal arrays
6. **LCA Algorithms:** Finding common ancestors

---

## 🎯 Interview Tips

1. **Always ask about tree properties:** Balanced? BST? Complete?
2. **Clarify null handling:** How to handle empty trees?
3. **Discuss trade-offs:** Recursive vs iterative approaches
4. **Consider edge cases:** Single node, skewed tree, null root
5. **Optimize space:** Mention Morris traversal for O(1) space
6. **Test thoroughly:** Use small examples to verify logic
