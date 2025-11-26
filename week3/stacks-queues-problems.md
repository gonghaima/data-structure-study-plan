# Stacks and Queues Problems - Week 3

## 🎯 Third Week - Stacks and Queues Problems

### Problem 1: Valid Parentheses ⭐ (Easy - Perfect Starting Point)

**LeetCode #20**

- **Why start here:** Fundamental stack operations and bracket matching
- **Key concepts:** LIFO principle, stack push/pop, character mapping
- **Time to solve:** 20-30 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 2: Min Stack ⭐⭐ (Easy-Medium)

**LeetCode #155**

- **Why next:** Advanced stack design with auxiliary data structures
- **Key concepts:** Stack design, minimum tracking, space-time tradeoffs
- **Time to solve:** 30-40 minutes
- **Expected complexity:** O(1) for all operations

### Problem 3: Evaluate Reverse Polish Notation ⭐⭐ (Medium)

**LeetCode #150**

- **Why important:** Stack-based expression evaluation
- **Key concepts:** Postfix notation, operator precedence, stack evaluation
- **Time to solve:** 25-35 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 4: Daily Temperatures ⭐⭐⭐ (Medium)

**LeetCode #739**

- **Why crucial:** Monotonic stack pattern for next greater element
- **Key concepts:** Monotonic stack, index tracking, temperature comparison
- **Time to solve:** 35-45 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 5: Sliding Window Maximum ⭐⭐⭐ (Hard)

**LeetCode #239**

- **Why essential:** Deque-based sliding window optimization
- **Key concepts:** Deque operations, sliding window, maximum tracking
- **Time to solve:** 45-60 minutes
- **Expected complexity:** O(n) time, O(k) space

---

## 🧠 Core Concepts to Master

### LIFO vs FIFO Principles
- Stack: Last In, First Out
- Queue: First In, First Out
- When to use each data structure

### Stack Implementation and Operations
- Array-based vs linked list implementation
- Push, pop, peek operations
- Stack overflow and underflow handling

### Queue Implementation Variations
- Circular queue design
- Queue using two stacks
- Deque (double-ended queue) operations

### Monotonic Stack/Queue Patterns
- Next greater/smaller element problems
- Sliding window maximum/minimum
- Histogram-based problems

---

## 📋 Study Approach for Each Problem

### Step 1: Understand the Pattern (10-15 minutes)
- Identify if it's a stack or queue problem
- Recognize common patterns (bracket matching, monotonic stack, etc.)
- Consider edge cases and constraints

### Step 2: Choose Data Structure (5-10 minutes)
- Stack for LIFO operations
- Queue for FIFO operations
- Deque for both ends access

### Step 3: Implement (25-35 minutes)
- Handle empty structure cases
- Implement core logic step by step
- Test with examples

### Step 4: Optimize & Review (10-15 minutes)
- Check space complexity
- Consider alternative approaches
- Verify edge case handling

---

## 🎯 This Week's Goal

Complete these 5 problems over 4-5 days, spending about 1-1.5 hours per problem. This will give you mastery of:

- Stack and queue operations
- Bracket matching algorithms
- Monotonic stack patterns
- Sliding window with deque

---

## 📝 Related Problems to Practice

### Stack Problems:
- **Baseball Game** (LeetCode #682)
- **Next Greater Element I** (LeetCode #496)
- **Valid Parentheses** (LeetCode #20)
- **Remove All Adjacent Duplicates** (LeetCode #1047)

### Queue Problems:
- **Implement Queue using Stacks** (LeetCode #232)
- **Implement Stack using Queues** (LeetCode #225)
- **Design Circular Queue** (LeetCode #622)

### Advanced Stack/Queue:
- **Largest Rectangle in Histogram** (LeetCode #84)
- **Trapping Rain Water** (LeetCode #42)
- **Maximal Rectangle** (LeetCode #85)

---

## 🚀 Key Applications

### Stacks:
- Function call management
- Expression evaluation
- Undo operations
- Browser history
- Parentheses matching

### Queues:
- Task scheduling
- Breadth-first search
- Print queue management
- Buffer for data streams

### Deque:
- Sliding window problems
- Palindrome checking
- Both ends processing

---

## 💡 Problem-Solving Tips

1. **For bracket matching:** Use stack with character mapping
2. **For next greater element:** Use monotonic decreasing stack
3. **For sliding window maximum:** Use deque to maintain candidates
4. **For expression evaluation:** Use stack for operands and operators
5. **For design problems:** Consider auxiliary data structures for optimization