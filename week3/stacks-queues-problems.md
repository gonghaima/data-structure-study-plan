# Stacks and Queues Problems - Week 3

## 🎯 Third Week - Stacks and Queues Mastery

### Problem 1: Valid Parentheses ⭐ (Easy - Perfect Starting Point)

**LeetCode #20**

- **Why start here:** Fundamental stack application and LIFO principle
- **Key concepts:** Stack operations, character matching, balanced parentheses
- **Time to solve:** 20-30 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 2: Min Stack ⭐⭐ (Medium)

**LeetCode #155**

- **Why next:** Design problem with constant time constraints
- **Key concepts:** Auxiliary data structures, O(1) operations, stack design
- **Time to solve:** 35-45 minutes
- **Expected complexity:** O(1) time for all operations, O(n) space

### Problem 3: Evaluate Reverse Polish Notation ⭐⭐ (Medium)

**LeetCode #150**

- **Why important:** Stack-based expression evaluation
- **Key concepts:** Postfix notation, operator precedence, stack evaluation
- **Time to solve:** 30-40 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 4: Daily Temperatures ⭐⭐⭐ (Medium)

**LeetCode #739**

- **Why crucial:** Monotonic stack pattern introduction
- **Key concepts:** Monotonic stack, next greater element, index tracking
- **Time to solve:** 40-50 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 5: Sliding Window Maximum ⭐⭐⭐ (Hard)

**LeetCode #239**

- **Why essential:** Advanced deque application and sliding window
- **Key concepts:** Deque operations, sliding window optimization, monotonic deque
- **Time to solve:** 50-60 minutes
- **Expected complexity:** O(n) time, O(k) space

---

## 🧠 Core Concepts to Master

### LIFO vs FIFO Principles
- Stack: Last In, First Out operations
- Queue: First In, First Out operations
- When to use each data structure

### Stack Implementation Patterns
- Array-based implementation
- Linked list-based implementation
- Dynamic resizing considerations

### Queue Implementation Techniques
- Circular queue design
- Queue using two stacks
- Deque (double-ended queue) operations

### Monotonic Stack/Queue Applications
- Next greater/smaller element problems
- Sliding window maximum/minimum
- Histogram area calculations

---

## 📋 Study Approach for Each Problem

### Step 1: Understand the Pattern (15-20 minutes)
- Identify if it's a stack or queue problem
- Recognize the underlying pattern (matching, evaluation, monotonic)
- Consider edge cases and constraints

### Step 2: Design the Solution (15-20 minutes)
- Choose appropriate data structure
- Plan the algorithm step by step
- Consider space-time trade-offs

### Step 3: Implement (25-35 minutes)
- Code the solution incrementally
- Handle edge cases properly
- Test with provided examples

### Step 4: Optimize & Analyze (10-15 minutes)
- Verify time and space complexity
- Consider alternative approaches
- Compare with optimal solutions

---

## 🎯 This Week's Goals

Complete these 5 problems over 5-6 days, spending about 1.5-2 hours per problem. This will give you mastery of:

- Stack and queue operations
- Design patterns for data structures
- Monotonic stack/queue techniques
- Expression evaluation algorithms

---

## 🔗 Related Problems to Explore

### Stack Applications
- **Largest Rectangle in Histogram** (LeetCode #84)
- **Trapping Rain Water** (LeetCode #42)
- **Remove Duplicate Letters** (LeetCode #316)

### Queue Applications
- **Implement Queue using Stacks** (LeetCode #232)
- **Design Circular Queue** (LeetCode #622)
- **Moving Average from Data Stream** (LeetCode #346)

### Advanced Patterns
- **Shortest Subarray with Sum at Least K** (LeetCode #862)
- **Constrained Subsequence Sum** (LeetCode #1425)
- **Jump Game VI** (LeetCode #1696)

---

## 🚀 Key Algorithmic Patterns

### 1. Parentheses/Bracket Matching
```
Pattern: Use stack to track opening brackets
Applications: Valid parentheses, remove invalid parentheses
```

### 2. Expression Evaluation
```
Pattern: Stack-based parsing and evaluation
Applications: Calculator problems, postfix evaluation
```

### 3. Monotonic Stack
```
Pattern: Maintain stack in monotonic order
Applications: Next greater element, daily temperatures
```

### 4. Sliding Window with Deque
```
Pattern: Deque for window maximum/minimum
Applications: Sliding window maximum, constrained problems
```

---

## 📊 Complexity Targets

| Problem Type | Time Complexity | Space Complexity |
|-------------|----------------|------------------|
| Basic Stack Ops | O(1) per op | O(n) |
| Expression Eval | O(n) | O(n) |
| Monotonic Stack | O(n) | O(n) |
| Sliding Window | O(n) | O(k) |

---

## 🎓 Learning Outcomes

After completing this week, you should be able to:

- Implement stack and queue from scratch
- Recognize when to use stack vs queue
- Apply monotonic stack pattern
- Design efficient sliding window solutions
- Handle expression evaluation problems
- Optimize space usage in stack/queue problems