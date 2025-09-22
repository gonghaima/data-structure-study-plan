---
title: Data Structures Map
markmap:
  colorFreezeLevel: 2
---

## Linear Data Structures

### Arrays

- **Static Arrays**
  - Fixed size allocation
  - O(1) access by index
  - Memory efficient
- **Dynamic Arrays**
  - Resizable capacity
  - ArrayList, Vector
  - Amortized O(1) append
- **Multi-dimensional Arrays**
  - 2D Arrays (Matrix)
  - 3D Arrays
  - Jagged Arrays

### Linked Lists

- **Singly Linked List**
  - One direction traversal
  - O(1) insertion/deletion at head
  - O(n) search
- **Doubly Linked List**
  - Bidirectional traversal
  - Previous and next pointers
  - O(1) insertion/deletion at any node
- **Circular Linked List**
  - Last node points to first
  - Useful for round-robin scheduling
- **Skip List**
  - Probabilistic data structure
  - Multiple levels for fast search
  - O(log n) average operations

### Stacks

- **Array-based Stack**
  - Fixed or dynamic size
  - LIFO principle
  - O(1) push/pop operations
- **Linked List Stack**
  - Dynamic size
  - No overflow issues
- **Applications**
  - Function call management
  - Expression evaluation
  - Undo operations
  - Browser history

### Queues

- **Simple Queue**
  - FIFO principle
  - Array or linked list implementation
- **Circular Queue**
  - Efficient space utilization
  - Fixed size with wrap-around
- **Priority Queue**
  - Elements with priorities
  - Heap-based implementation
- **Deque (Double-ended Queue)**
  - Insertion/deletion at both ends
  - Combines stack and queue features

## Non-Linear Data Structures

### Trees

- **Binary Trees**
  - Each node has ≤ 2 children
  - Left and right subtrees
  - Various traversal methods
- **Binary Search Trees (BST)**
  - Left < Root < Right property
  - O(log n) average operations
  - Can degrade to O(n) if unbalanced
- **Balanced Trees**
  - **AVL Trees**
    - Height-balanced BST
    - Rotation operations
    - Guaranteed O(log n) operations
  - **Red-Black Trees**
    - Self-balancing BST
    - Color properties
    - Used in many libraries
  - **B-Trees**
    - Multi-way search trees
    - Used in databases
    - Optimized for disk storage
  - **B+ Trees**
    - Variant of B-trees
    - All data in leaf nodes
    - Better for range queries
- **Specialized Trees**
  - **Trie (Prefix Tree)**
    - String storage and search
    - Auto-complete functionality
    - O(m) operations (m = string length)
  - **Suffix Tree**
    - All suffixes of a string
    - Pattern matching
    - Bioinformatics applications
  - **Segment Tree**
    - Range query optimization
    - O(log n) range operations
    - Lazy propagation
  - **Fenwick Tree (BIT)**
    - Binary Indexed Tree
    - Prefix sum queries
    - O(log n) update/query
  - **Splay Tree**
    - Self-adjusting BST
    - Recently accessed nodes move to root
    - Amortized O(log n) operations

### Heaps

- **Binary Heap**
  - Complete binary tree
  - Min-heap or Max-heap property
  - O(log n) insertion/deletion
- **Binomial Heap**
  - Collection of binomial trees
  - Efficient merge operations
  - O(log n) operations
- **Fibonacci Heap**
  - Advanced heap structure
  - O(1) amortized insertion
  - Used in advanced algorithms
- **d-ary Heap**
  - Each node has d children
  - Trade-off between height and branching

### Graphs

- **Representation**
  - **Adjacency Matrix**
    - 2D array representation
    - O(1) edge lookup
    - O(V²) space complexity
  - **Adjacency List**
    - Array of lists
    - O(V + E) space complexity
    - Efficient for sparse graphs
  - **Edge List**
    - List of all edges
    - Simple representation
    - Good for some algorithms
- **Types**
  - **Directed Graphs**
    - Edges have direction
    - Asymmetric relationships
  - **Undirected Graphs**
    - Bidirectional edges
    - Symmetric relationships
  - **Weighted Graphs**
    - Edges have weights/costs
    - Distance or cost representation
  - **Unweighted Graphs**
    - All edges equal weight
    - Simple connectivity
- **Special Graph Types**
  - **DAG (Directed Acyclic Graph)**
    - No cycles
    - Topological ordering possible
  - **Bipartite Graphs**
    - Two disjoint vertex sets
    - Edges only between sets
  - **Complete Graphs**
    - Every vertex connected to every other
  - **Trees (Connected Acyclic Graphs)**
    - Special case of graphs
    - V-1 edges for V vertices

## Hash-based Data Structures

### Hash Tables

- **Hash Maps**
  - Key-value pairs
  - O(1) average operations
  - Collision handling required
- **Hash Sets**
  - Unique elements only
  - Fast membership testing
  - Set operations
- **Collision Resolution**
  - **Chaining**
    - Linked lists at each bucket
    - Simple implementation
  - **Open Addressing**
    - Linear probing
    - Quadratic probing
    - Double hashing
- **Applications**
  - Caching (LRU, LFU)
  - Database indexing
  - Symbol tables
  - Frequency counting

### Bloom Filters

- Probabilistic data structure
- Space-efficient set membership
- False positives possible
- No false negatives
- Applications in databases and networks

## Advanced Data Structures

### Disjoint Set Union (Union-Find)

- **Path Compression**
  - Flattens tree structure
  - Optimizes find operations
- **Union by Rank/Size**
  - Balances tree height
  - Optimizes union operations
- **Applications**
  - Connected components
  - Kruskal's MST algorithm
  - Dynamic connectivity

### String Data Structures

- **Suffix Arrays**
  - Sorted array of suffixes
  - Space-efficient alternative to suffix trees
- **KMP Failure Function**
  - Pattern matching optimization
  - Preprocessing for efficient search
- **Z-Algorithm**
  - String matching
  - Linear time complexity

### Geometric Data Structures

- **KD-Trees**
  - k-dimensional space partitioning
  - Nearest neighbor search
  - Range queries
- **Quad Trees**
  - 2D space partitioning
  - Image processing
  - Collision detection
- **R-Trees**
  - Rectangle-based indexing
  - Spatial databases
  - Geographic information systems

### Probabilistic Data Structures

- **Count-Min Sketch**
  - Frequency estimation
  - Streaming data analysis
- **HyperLogLog**
  - Cardinality estimation
  - Large dataset analysis
- **Skip Lists**
  - Probabilistic balanced structure
  - Alternative to balanced trees

## Time Complexity Summary

### Common Operations

| Data Structure     | Access   | Search   | Insertion | Deletion |
| ------------------ | -------- | -------- | --------- | -------- |
| Array              | O(1)     | O(n)     | O(n)      | O(n)     |
| Linked List        | O(n)     | O(n)     | O(1)      | O(1)     |
| Stack              | O(n)     | O(n)     | O(1)      | O(1)     |
| Queue              | O(n)     | O(n)     | O(1)      | O(1)     |
| Hash Table         | N/A      | O(1)\*   | O(1)\*    | O(1)\*   |
| Binary Search Tree | O(log n) | O(log n) | O(log n)  | O(log n) |
| AVL Tree           | O(log n) | O(log n) | O(log n)  | O(log n) |
| Binary Heap        | N/A      | O(n)     | O(log n)  | O(log n) |

\*Average case, O(n) worst case

## Space Complexity Considerations

- **Arrays**: O(n) - contiguous memory
- **Linked Lists**: O(n) - extra pointer storage
- **Trees**: O(n) - pointer overhead
- **Hash Tables**: O(n) - load factor dependent
- **Graphs**: O(V + E) - adjacency list representation
