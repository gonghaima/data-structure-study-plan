# Hash Tables/Hash Maps Problems - Week 4

## 🎯 Fourth Week - Hash Tables and Hash Maps

### Problem 1: Two Sum ⭐ (Easy - Perfect Starting Point)

**LeetCode #1**

- **Why start here:** Classic hash map application for O(n) lookup optimization
- **Key concepts:** Hash map for complement lookup, space-time tradeoff
- **Time to solve:** 20-30 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 2: Group Anagrams ⭐⭐ (Medium)

**LeetCode #49**

- **Why next:** Introduces hash map for grouping and string manipulation
- **Key concepts:** Hash key design, character frequency, sorting vs counting
- **Time to solve:** 30-40 minutes
- **Expected complexity:** O(n * k) time, O(n * k) space (k = avg string length)

### Problem 3: Top K Frequent Elements ⭐⭐ (Medium)

**LeetCode #347**

- **Why important:** Combines hash map with frequency counting and sorting
- **Key concepts:** Frequency map, bucket sort, heap optimization
- **Time to solve:** 35-45 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 4: Longest Consecutive Sequence ⭐⭐⭐ (Medium)

**LeetCode #128**

- **Why crucial:** Advanced hash set usage for sequence detection
- **Key concepts:** Hash set for O(1) lookup, sequence building, avoiding duplicates
- **Time to solve:** 40-50 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 5: Design HashMap ⭐⭐ (Easy-Medium)

**LeetCode #706**

- **Why essential:** Understanding hash map internals and collision handling
- **Key concepts:** Hash function, chaining, array-based implementation
- **Time to solve:** 35-45 minutes
- **Expected complexity:** O(1) average for operations

---

## 🧠 Core Concepts to Master

### Hash Function Design
- Deterministic mapping
- Uniform distribution
- Minimizing collisions
- Modulo operation for array indexing

### Collision Handling
- **Chaining:** Linked lists at each bucket
- **Open Addressing:** Linear probing, quadratic probing
- **Double Hashing:** Secondary hash function
- Trade-offs between methods

### Load Factor and Rehashing
- Load factor = n / capacity
- Typical threshold: 0.75
- Dynamic resizing strategy
- Amortized O(1) operations

### Applications
- Fast lookup and insertion
- Counting frequencies
- Grouping related items
- Detecting duplicates
- Caching and memoization

---

## 📋 Study Approach for Each Problem

### Step 1: Identify the Pattern (10-15 minutes)
- Recognize if hash map/set is optimal
- Determine what to use as key
- Consider value structure (count, list, set)

### Step 2: Design the Solution (10-15 minutes)
- Choose Map vs Set
- Plan key-value relationships
- Handle edge cases (empty input, duplicates)

### Step 3: Implement (20-30 minutes)
- Code the hash-based solution
- Handle collisions if designing from scratch
- Test with examples

### Step 4: Optimize & Review (10-15 minutes)
- Verify O(1) average operations
- Check space usage
- Compare with alternative approaches

---

## 🎯 This Week's Goal

Complete these 5 problems over 4-5 days, spending about 1-1.5 hours per problem. This will give you mastery of:

- Hash map and hash set operations
- Frequency counting patterns
- Grouping and categorization
- Custom hash function design

---

## 📝 Related Problems

### Two-Sum Variations
- **Two Sum II - Input Array Is Sorted** (LeetCode #167)
- **3Sum** (LeetCode #15)
- **4Sum** (LeetCode #18)
- **Two Sum III - Data Structure Design** (LeetCode #170)
- **Two Sum IV - Input is a BST** (LeetCode #653)

### Frequency and Counting
- **Valid Anagram** (LeetCode #242)
- **First Unique Character in a String** (LeetCode #387)
- **Sort Characters By Frequency** (LeetCode #451)
- **Top K Frequent Words** (LeetCode #692)
- **Find All Anagrams in a String** (LeetCode #438)

### Grouping and Categorization
- **Group Shifted Strings** (LeetCode #249)
- **Encode and Decode TinyURL** (LeetCode #535)
- **Subdomain Visit Count** (LeetCode #811)
- **Brick Wall** (LeetCode #554)

### Sequence and Subarray Problems
- **Subarray Sum Equals K** (LeetCode #560)
- **Continuous Subarray Sum** (LeetCode #523)
- **Longest Substring Without Repeating Characters** (LeetCode #3)
- **Minimum Window Substring** (LeetCode #76)

### Design Problems
- **Design HashSet** (LeetCode #705)
- **Design HashMap** (LeetCode #706)
- **LRU Cache** (LeetCode #146)
- **Insert Delete GetRandom O(1)** (LeetCode #380)

### Advanced Hash Map Problems
- **Copy List with Random Pointer** (LeetCode #138)
- **Clone Graph** (LeetCode #133)
- **Word Pattern** (LeetCode #290)
- **Isomorphic Strings** (LeetCode #205)

---

## 🔑 Key Patterns to Recognize

### Pattern 1: Complement Lookup
- Store seen elements in hash map
- Check for complement/target
- Examples: Two Sum, Pair with Target Sum

### Pattern 2: Frequency Counting
- Count occurrences using hash map
- Process based on frequencies
- Examples: Top K Frequent, Valid Anagram

### Pattern 3: Grouping by Key
- Design appropriate hash key
- Group items with same key
- Examples: Group Anagrams, Group Shifted Strings

### Pattern 4: Prefix Sum with Hash Map
- Store cumulative sums as keys
- Find subarrays with target sum
- Examples: Subarray Sum Equals K, Continuous Subarray Sum

### Pattern 5: Index Mapping
- Map values to indices
- Track positions for lookups
- Examples: Two Sum, Contains Duplicate II

---

## 💡 Common Pitfalls to Avoid

1. **Hash collision handling:** Not considering collision scenarios
2. **Key design:** Using mutable objects as keys
3. **Space complexity:** Creating unnecessary copies
4. **Edge cases:** Empty input, single element, all duplicates
5. **Integer overflow:** When computing hash codes
6. **Null handling:** Not checking for null keys/values

---

## 🔬 Time Complexity Analysis

### Hash Map Operations
- **Insert:** O(1) average, O(n) worst case
- **Lookup:** O(1) average, O(n) worst case
- **Delete:** O(1) average, O(n) worst case
- **Rehashing:** O(n) but amortized O(1)

### Space-Time Tradeoffs
- **Brute Force:** O(n²) time, O(1) space
- **Hash Map:** O(n) time, O(n) space
- **Sorted Array:** O(n log n) time, O(1) space

---

## 🚀 Advanced Topics After These 5

Once comfortable with the basics, explore:

- **Consistent Hashing:** Distributed systems
- **Bloom Filters:** Probabilistic data structures
- **Count-Min Sketch:** Frequency estimation
- **Trie with Hash Map:** Autocomplete systems
- **Rolling Hash:** Rabin-Karp algorithm

---

## 📊 Progress Tracking

- [ ] Two Sum
- [ ] Group Anagrams
- [ ] Top K Frequent Elements
- [ ] Longest Consecutive Sequence
- [ ] Design HashMap

**Target:** Complete all 5 problems with optimal O(n) or O(1) solutions and understand hash-based optimizations.

---

## 🎓 Key Takeaways

### When to Use Hash Maps
- Need fast lookup (O(1) average)
- Counting frequencies
- Detecting duplicates
- Grouping related items
- Caching computed results

### When NOT to Use Hash Maps
- Need sorted order (use TreeMap/BST)
- Memory is severely constrained
- Small dataset (array might be faster)
- Need range queries (use segment tree)

### Hash Function Properties
1. **Deterministic:** Same input → same output
2. **Uniform:** Even distribution across buckets
3. **Efficient:** Fast to compute
4. **Avalanche Effect:** Small input change → large output change
