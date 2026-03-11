Morris 中序遍历 · 完整笔记
==================

1/2 核心思想与优点
-----------

### 核心思想

Morris 遍历通过**临时搭桥 + 拆桥**，在不使用栈、不使用递归的情况下，实现二叉树遍历。

*   空间复杂度：O(1)
*   时间复杂度：O(n)

### 优点

1.  仅使用 O(1) 额外空间，最核心优势
2.  时间仍为线性 O(n)，不变慢
3.  遍历后恢复原树，不破坏结构
4.  无递归栈溢出风险
5.  前序、中序、后序均可使用

* * *

3/4 遍历规则与示例树
------------

### 示例二叉树

        1
       / \\
      2   3
     / \\
    4   5
    

中序遍历结果：`4 → 2 → 5 → 1 → 3`

### 遍历规则

1.  当前节点 cur
2.  若无左孩子：访问，cur 右移
3.  若有左孩子：
    *   找左子树最右节点（前驱）
    *   前驱右为空：搭桥，cur 左移
    *   前驱右指向 cur：拆桥，访问，cur 右移

* * *

5 一步一图遍历过程
----------

### ① cur = 1，搭桥

        1
       / ↗
      2   3
     / \\
    4   5
    

### ② cur = 2，搭桥

        1
       / ↗
      2   3
    ↗ / \\
    4   5
    

### ③ cur = 4，无左孩子

访问 4，cur 右移到 2

### ④ cur = 2，拆桥

访问 2，cur 右移到 5

### ⑤ cur = 5，无左孩子

访问 5，cur 右移到 1

### ⑥ cur = 1，拆桥

访问 1，cur 右移到 3

### ⑦ cur = 3，无左孩子

访问 3，遍历结束

* * *

最终结果
----

`[4, 2, 5, 1, 3]`

总结
--

*   搭桥：记录回溯路径
*   拆桥：还原二叉树
*   空间 O(1)，时间 O(n)
*   无栈、无递归、安全高效

Morris Inorder Traversal · Complete Notes
=========================================

1/2 Core Idea & Advantages
--------------------------

### Core Idea

Morris traversal implements binary tree traversal **without using stacks or recursion** by means of **temporary bridging + bridge removal**.

*   Space Complexity: O(1)
*   Time Complexity: O(n)

### Advantages

1.  Only uses O(1) extra space (the core advantage)
2.  Maintains linear time complexity O(n) (no slowdown)
3.  Restores the original tree structure after traversal (no damage)
4.  No risk of recursive stack overflow
5.  Applicable to preorder, inorder, and postorder traversal

* * *

3/4 Traversal Rules & Example Tree
----------------------------------

### Example Binary Tree

        1
       / \\
      2   3
     / \\
    4   5
    

Inorder traversal result: `4 → 2 → 5 → 1 → 3`

### Traversal Rules

1.  Current node: cur
2.  If cur has no left child: visit cur, move cur to the right
3.  If cur has a left child:
    *   Find the rightmost node of the left subtree (predecessor)
    *   If predecessor's right is null: build a bridge (predecessor.right = cur), move cur to the left
    *   If predecessor's right points to cur: remove the bridge, visit cur, move cur to the right

* * *

5 Step-by-Step Traversal Process
--------------------------------

### ① cur = 1, Build Bridge

        1
       / ↗
      2   3
     / \\
    4   5
    

### ② cur = 2, Build Bridge

        1
       / ↗
      2   3
    ↗ / \\
    4   5
    

### ③ cur = 4, No Left Child

Visit 4, move cur to 2

### ④ cur = 2, Remove Bridge

Visit 2, move cur to 5

### ⑤ cur = 5, No Left Child

Visit 5, move cur to 1

### ⑥ cur = 1, Remove Bridge

Visit 1, move cur to 3

### ⑦ cur = 3, No Left Child

Visit 3, traversal completed

* * *

Final Result
------------

`[4, 2, 5, 1, 3]`

Summary
-------

*   Bridge Building: Record the backtracking path
*   Bridge Removal: Restore the original binary tree
*   Space: O(1), Time: O(n)
*   No stack, no recursion, safe and efficient