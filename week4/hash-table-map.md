# Hash Tables/Hash Maps Problems - Week 4

## 🎯 Fourth Week - Hash Tables/Hash Maps Problems

### Problem 1: Two Sum ⭐ (Easy - Perfect Starting Point)

**LeetCode #1**

- **Why start here:** Classic hash map usage for fast lookup and complement search
- **Key concepts:** Hash map for O(1) lookup, single-pass solution, complement calculation
- **Time to solve:** 20-30 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 2: Group Anagrams ⭐⭐ (Medium)

**LeetCode #49**

- **Why next:** Introduces grouping and string hashing techniques
- **Key concepts:** Hashing sorted strings, character frequency counting, grouping by hash key
- **Time to solve:** 30-40 minutes
- **Expected complexity:** O(n * k log k) time, O(n * k) space

### Problem 3: Top K Frequent Elements ⭐⭐ (Medium)

**LeetCode #347**

- **Why important:** Combines frequency counting with efficient sorting/selection
- **Key concepts:** Hash map for frequency, bucket sort, heap usage
- **Time to solve:** 35-45 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 4: Longest Consecutive Sequence ⭐⭐⭐ (Hard)

**LeetCode #128**

- **Why crucial:** Advanced hash set usage for sequence detection without sorting
- **Key concepts:** Hash set for O(1) lookup, sequence expansion, avoiding duplicates
- **Time to solve:** 40-50 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 5: Design HashMap ⭐⭐ (Medium)

**LeetCode #706**

- **Why essential:** Understanding hash table internals and collision handling
- **Key concepts:** Array buckets, hash function, collision resolution, load factor
- **Time to solve:** 45-55 minutes
- **Expected complexity:** O(1) average time, O(n) space

---

## 🧠 Core Concepts to Master

### Hash Function Design
- Uniform distribution properties
- Collision minimization
- Load factor management
- Rehashing strategies

### Collision Handling
- Chaining with linked lists
- Open addressing (linear/quadratic probing)
- Double hashing techniques
- Performance implications

### Applications Patterns
- Fast lookup and existence checking
- Frequency counting and grouping
- Complement and pair finding
- Caching and memoization

### Space-Time Tradeoffs
- Memory usage vs speed
- Hash table sizing
- Dynamic resizing strategies
- Cache-friendly implementations

---

## 📋 Study Approach for Each Problem

### Step 1: Identify Hash Usage (10-15 minutes)
- Determine if fast lookup is needed
- Choose between HashMap vs HashSet
- Consider key-value relationships

### Step 2: Design Hash Strategy (10-15 minutes)
- Select appropriate hash key
- Handle collision scenarios
- Plan for edge cases (empty, duplicates)

### Step 3: Implement (25-35 minutes)
- Code the hash-based solution
- Handle hash operations correctly
- Test with provided examples

### Step 4: Optimize & Analyze (10-15 minutes)
- Verify time/space complexity
- Consider alternative hash strategies
- Compare with brute force approaches

---

## 🎯 This Week's Goal

Complete these 5 problems over 4-5 days, spending about 1-1.5 hours per problem. This will give you mastery of:

- Hash table fundamentals
- Collision handling strategies
- Frequency counting patterns
- Grouping and lookup optimizations

---

## 📝 Related Problems to Practice

Once comfortable with the basics, tackle:

**Frequency & Counting:**
- **Subarray Sum Equals K** (LeetCode #560)
- **Contains Duplicate** (LeetCode #217)
- **First Unique Character in a String** (LeetCode #387)

**String & Anagram Problems:**
- **Valid Anagram** (LeetCode #242)
- **Find All Anagrams in a String** (LeetCode #438)
- **Isomorphic Strings** (LeetCode #205)

**Advanced Applications:**
- **Minimum Window Substring** (LeetCode #76)
- **Copy List with Random Pointer** (LeetCode #138)
- **Word Pattern** (LeetCode #290)

**Set Operations:**
- **Intersection of Two Arrays** (LeetCode #349)
- **Happy Number** (LeetCode #202)
- **Find Duplicate Subtrees** (LeetCode #652)

---

## 🔗 Hash Table Implementation Patterns

### Basic HashMap Operations
```javascript
const map = new Map();
map.set(key, value);    // O(1) average
map.get(key);           // O(1) average
map.has(key);           // O(1) average
map.delete(key);        // O(1) average
```

### Frequency Counting Pattern
```javascript
const freq = new Map();
for (const item of array) {
    freq.set(item, (freq.get(item) || 0) + 1);
}
```

### Grouping Pattern
```javascript
const groups = new Map();
for (const item of array) {
    const key = getKey(item);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
}
```

---

## 🚀 Getting Started Options

1. **Review hash table fundamentals** and collision handling
2. **Practice frequency counting** with simple problems
3. **Master the Two Sum pattern** and its variations
4. **Implement custom hash table** to understand internals

Which approach would help you build strong hash table problem-solving skills most effectively?
