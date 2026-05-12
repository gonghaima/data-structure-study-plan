# Data Structure + Algorithm Cheat Sheet

Common data structure + algorithm/technique pairings you'll see in 90% of coding interviews.

## 1. Array / String
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **Two Pointers** | Sorted array, find pairs/triplets, in-place work | Two Sum II, 3Sum, Remove Duplicates, Container With Most Water |
| **Sliding Window** | Contiguous subarray/substring, max/min/length with constraint | Longest Substring Without Repeat, Max Sum Subarray of Size K, Min Window Substring |
| **Prefix Sum / Difference Array** | Range sum queries, range updates | Subarray Sum Equals K, Range Sum Query, Corporate Flight Bookings |
| **Binary Search** | Sorted array, search in monotonic space | Search in Rotated Array, Find Peak, Koko Eating Bananas |
| **Kadane’s Algorithm** | Max subarray sum | Maximum Subarray |
| **Dutch National Flag** | Sort 3 distinct values in-place | Sort Colors |

## 2. Hash Table / Hash Map / Hash Set
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **Hashing for O(1) Lookup** | Need fast "seen before?" or frequency count | Two Sum, Group Anagrams, Isomorphic Strings |
| **Hash + Sliding Window** | Track window character/frequency constraints | Longest Substring w/ K Distinct, Permutation in String |
| **Hash + Prefix Sum** | Find subarray with sum/prop mod k | Subarray Sum Equals K, Continuous Subarray Sum |

## 3. Stack
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **Monotonic Stack** | Next greater/smaller element, histogram problems | Next Greater Element, Largest Rectangle in Histogram, Daily Temperatures |
| **Stack for Parsing/Matching** | Parentheses, expression evaluation | Valid Parentheses, Min Remove to Make Valid, Basic Calculator |
| **Stack for DFS** | Iterative tree/graph traversal | Iterative Inorder Traversal |

## 4. Queue / Deque
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **BFS** | Shortest path in unweighted graph/grid, level order | Binary Tree Level Order, Rotting Oranges, Word Ladder |
| **Monotonic Deque** | Sliding window maximum/minimum | Sliding Window Maximum |
| **Queue for Simulation** | Scheduling, recent calls | Number of Recent Calls, Task Scheduler |

## 5. Heap / Priority Queue
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **Top K Elements** | Find K largest/smallest | Kth Largest Element, Top K Frequent Elements |
| **Two Heaps** | Running median | Find Median from Data Stream |
| **Dijkstra’s Algorithm** | Shortest path, non-negative weights | Network Delay Time |
| **Prim’s Algorithm** | Minimum Spanning Tree | Min Cost to Connect All Points |
| **Merge K Sorted** | Heap to merge multiple sequences | Merge K Sorted Lists |

## 6. Linked List
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **Fast + Slow Pointers** | Cycle detect, middle, nth from end | Linked List Cycle, Middle of List, Palindrome Linked List |
| **Dummy Node** | Simplify edge cases for insertion/deletion | Merge Two Lists, Remove Nth Node |
| **Reverse List** | In-place reversal, k-group | Reverse Linked List, Reverse Nodes in k-Group |

## 7. Tree / BST
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **DFS: Pre/In/Post Order** | Traverse, build, serialize | Max Depth, Serialize Tree, Path Sum |
| **BFS / Level Order** | Level-by-level processing | Zigzag Level Order, Right Side View |
| **BST Property** | Search/insert in O(log n) | Validate BST, Kth Smallest in BST |
| **Lowest Common Ancestor** | Ancestor queries | LCA of Binary Tree, LCA of BST |
| **Trie / Prefix Tree** | String prefixes, autocomplete | Implement Trie, Word Search II |

## 8. Graph
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **DFS** | Connectivity, cycle detect, backtracking | Number of Islands, Clone Graph, Course Schedule |
| **BFS** | Shortest path unweighted, bipartite check | Shortest Path in Binary Matrix, Is Graph Bipartite |
| **Dijkstra’s** | Shortest path, non-negative weights | Cheapest Flights Within K Stops |
| **Bellman-Ford** | Shortest path, negative weights allowed | Network with Negative Cycles |
| **Floyd-Warshall** | All-pairs shortest path | Find City With Smallest Neighbors |
| **Topological Sort** | Dependency ordering, DAG | Course Schedule II, Alien Dictionary |
| **Union Find / DSU** | Connected components, cycle in undirected | Number of Provinces, Redundant Connection, Kruskal’s MST |

## 9. Intervals
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **Sort + Merge** | Overlapping interval consolidation | Merge Intervals, Insert Interval |
| **Sort by start, greedy** | Minimum rooms / non-overlapping count | Meeting Rooms II, Non-overlapping Intervals |
| **Line Sweep** | Events at start/end points, scheduling | Meeting Rooms II (sweep variant), Skyline Problem, Calendar problems |
| **Interval DP** | Optimal cost over subranges | Burst Balloons, Strange Printer, Matrix Chain Multiplication |

## 10. Matrix / Grid
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **BFS on grid** | Shortest path, multi-source flood fill | Rotting Oranges, 01 Matrix, Walls and Gates |
| **DFS / backtracking on grid** | Explore all paths, island counting | Number of Islands, Word Search, Surrounded Regions |
| **DP on grid** | Path count, min cost path | Unique Paths, Minimum Path Sum, Triangle |
| **Binary search on answer** | Max/min value with feasibility check on matrix | Kth Smallest in Sorted Matrix, Search a 2D Matrix II |
| **Spiral / layer traversal** | Simulate traversal order | Spiral Matrix, Rotate Image |

## 11. Divide & Conquer
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **Merge Sort** | Count inversions, sort linked list | Sort Array, Count of Smaller Numbers After Self |
| **Quick Select** | Kth largest/smallest in O(n) average | Kth Largest Element (without full sort), Top K Frequent |
| **Divide array / range** | Split problem into halves recursively | Maximum Subarray (D&C version), Median of Two Sorted Arrays |

## 12. Cyclic Sort
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **Cyclic Sort** | Array with values in range [1, n], find missing/duplicate in O(n) time O(1) space | Missing Number, Find All Duplicates, First Missing Positive |

## 13. Ordered Map / Sorted Set
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **Sorted Map / TreeMap** | Need sorted order + O(log n) insert/delete/lookup | My Calendar, Sliding Window Median, Count of Range Sum |
| **Order Statistics** | Kth element with dynamic inserts | Find Median from Data Stream (sorted list variant) |

## 14. String Algorithms
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **KMP (pattern matching)** | Find pattern in text in O(n+m) | strStr(), Repeated Substring Pattern |
| **Rolling Hash / Rabin-Karp** | Multiple pattern search, detect duplicate substrings | Longest Duplicate Substring, Repeated DNA Sequences |
| **Z-Algorithm** | Pattern matching, period detection | strStr() variant |
| **Manacher's Algorithm** | Longest palindromic substring in O(n) | Longest Palindromic Substring |
| **Trie** | Prefix search, word dictionary | Implement Trie, Word Search II, Replace Words |

## 15. Math & Number Theory
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **GCD / LCM (Euclidean)** | Fraction simplification, rhythm problems | GCD of Array, Fraction Addition |
| **Sieve of Eratosthenes** | Find all primes up to N | Count Primes |
| **Modular Arithmetic** | Prevent overflow in combinatorics/DP | Unique Paths (large), Catalan numbers |
| **Fast Power (binary exponentiation)** | x^n in O(log n) | Pow(x, n), Matrix Exponentiation |
| **Bit Manipulation** | Flags, subsets, XOR tricks | Single Number, Subsets, Counting Bits, Reverse Bits |
| **Pigeonhole / Counting** | Prove existence, frequency reasoning | Find Duplicate Number, Majority Element |

## 16. Advanced / Misc
| Pattern | When to use | Classic problems |
| --- | --- | --- |
| **Dynamic Programming (1D)** | Optimal substructure + overlapping subproblems | Climbing Stairs, House Robber, Coin Change, Word Break |
| **Dynamic Programming (2D)** | Two sequences, grid, knapsack | Edit Distance, LCS, Longest Common Substring, 0/1 Knapsack |
| **DP + Bitmask** | Small set of items (n≤20), subset states | Travelling Salesman, Minimum XOR Sum of Two Arrays |
| **Greedy** | Local optimal → global optimal | Jump Game, Interval Scheduling, Gas Station, Candy |
| **Backtracking** | Explore all possibilities with pruning | Permutations, Combinations, N-Queens, Sudoku Solver |
| **Minimax / Game Theory** | Two-player optimal play | Stone Game, Predict the Winner, Nim Game |
| **Segment Tree** | Range queries + range updates, O(log n) | Range Sum Query - Mutable, Range Min Query |
| **Fenwick Tree (BIT)** | Prefix sum with point updates, simpler than segment tree | Range Sum Query - Mutable, Count of Smaller Numbers |
| **Sparse Table** | Static range min/max queries in O(1) after O(n log n) build | Range Minimum Query |
| **Meet in the Middle** | Halve search space for 2^n problems (n≤40) | Partition Equal Subset Sum (large), 4Sum variant |
| **Reservoir Sampling** | Pick K random items from unknown-size stream | Linked List Random Node, Random Pick Index |
| **Bucket Sort / Counting Sort** | Bounded integer values, linear time sort | Sort Characters by Frequency, Maximum Gap |
| **Coordinate Compression** | Large value range but few distinct values | Count of Smaller Numbers, Rectangle Area |

---

### Pattern Recognition Cheat Sheet
| Clue in problem | First pattern to try |
| --- | --- |
| Sorted array, find pair/triplet | Two Pointers |
| Contiguous subarray with constraint | Sliding Window |
| Subarray sum / range query | Prefix Sum |
| "Shortest path", unweighted | BFS |
| "Shortest path", weighted non-negative | Dijkstra |
| "Shortest path", negative weights | Bellman-Ford |
| Dependencies / ordering | Topological Sort |
| Connected components | Union Find |
| "All combinations / permutations" | Backtracking |
| "Optimal" / "max" / "min" subproblem | Dynamic Programming |
| "Greedy" local choice works | Greedy |
| Next greater/smaller element | Monotonic Stack |
| Sliding window max/min | Monotonic Deque |
| Kth largest/smallest | Heap or Quick Select |
| Running median | Two Heaps |
| String pattern search | KMP or Rolling Hash |
| Longest palindrome | Manacher's or Expand Around Center |
| Array values in [1, n], find missing/dup | Cyclic Sort |
| Intervals overlap/merge | Sort by start + greedy |
| Two-player game | Minimax / DP |
| n ≤ 20 with subsets | Bitmask DP |

---

### How to use this
1. Read problem → scan for clues (sorted? substring? shortest path? grid?) → match to Pattern Recognition table above.
2. Find the section for the matched pattern → pick the specific technique.
3. The technique gives you the algorithm template — fill in problem-specific logic.
4. Check constraints: n ≤ 20 → bitmask. n ≤ 10^6 → must be O(n) or O(n log n). n ≤ 10^9 → O(log n) or math.