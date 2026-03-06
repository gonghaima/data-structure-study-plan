# Stacks and Queues Problems - Week 3

## 🎯 Third Week - Stacks and Queues Problems

### Problem 1: Valid Parentheses ⭐ (Easy - Perfect Starting Point)

**LeetCode #20**

- **Why start here:** Fundamental stack operations and LIFO principle
- **Key concepts:** Stack push/pop, character matching, balanced parentheses
- **Time to solve:** 20-30 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 2: Min Stack ⭐⭐ (Easy-Medium)

**LeetCode #155**

- **Why next:** Introduces auxiliary data structures and constant time operations
- **Key concepts:** Stack design, minimum tracking, space-time tradeoffs
- **Time to solve:** 30-40 minutes
- **Expected complexity:** O(1) all operations, O(n) space

### Problem 3: Evaluate Reverse Polish Notation ⭐⭐ (Medium)

**LeetCode #150**

- **Why important:** Classic stack application for expression evaluation
- **Key concepts:** Postfix notation, operator precedence, stack-based calculation
- **Time to solve:** 25-35 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 4: Sliding Window Maximum ⭐⭐⭐ (Hard)

**LeetCode #239**

- **Why crucial:** Advanced deque usage and monotonic queue concept
- **Key concepts:** Deque operations, sliding window, monotonic decreasing queue
- **Time to solve:** 45-60 minutes
- **Expected complexity:** O(n) time, O(k) space

### Problem 5: Daily Temperatures ⭐⭐ (Medium)

**LeetCode #739**

- **Why essential:** Monotonic stack pattern for next greater element problems
- **Key concepts:** Monotonic stack, index tracking, temperature comparison
- **Time to solve:** 35-45 minutes
- **Expected complexity:** O(n) time, O(n) space

---

## 🧠 Core Concepts to Master

### Stack Operations (LIFO)
- Push and pop operations
- Peek/top without removal
- Empty stack handling

### Queue Operations (FIFO)
- Enqueue and dequeue operations
- Front and rear pointers
- Circular queue implementation

### Monotonic Stack/Queue
- Maintaining order while processing
- Next greater/smaller element patterns
- Sliding window optimizations

### Design Patterns
- Using auxiliary stacks for optimization
- Stack-based expression evaluation
- Queue implementation with stacks

---

## 📋 Study Approach for Each Problem

### Step 1: Understand Data Structure (10-15 minutes)
- Identify LIFO vs FIFO requirements
- Choose appropriate data structure
- Consider space-time tradeoffs

### Step 2: Plan Algorithm (10-15 minutes)
- Map problem to stack/queue operations
- Handle edge cases (empty, single element)
- Consider auxiliary data structures

### Step 3: Implement (25-35 minutes)
- Code step by step
- Test with examples
- Verify operation complexity

### Step 4: Optimize & Review (10-15 minutes)
- Check for unnecessary operations
- Validate space complexity
- Compare with standard patterns

---

## 🎯 This Week's Goal

Complete these 5 problems over 4-5 days, spending about 1-1.5 hours per problem. This will give you mastery of:

- Stack and queue fundamentals
- Monotonic stack patterns
- Expression evaluation techniques
- Sliding window with deque

---

## 📝 Related LeetCode Problems

### Stack Problems:
- **Baseball Game** (LeetCode #682) - Easy
- **Next Greater Element I** (LeetCode #496) - Easy
- **Next Greater Element II** (LeetCode #503) - Medium
- **Largest Rectangle in Histogram** (LeetCode #84) - Hard
- **Trapping Rain Water** (LeetCode #42) - Hard

### Queue Problems:
- **Implement Queue using Stacks** (LeetCode #232) - Easy
- **Implement Stack using Queues** (LeetCode #225) - Easy
- **Design Circular Queue** (LeetCode #622) - Medium
- **Moving Average from Data Stream** (LeetCode #346) - Easy

### Deque Problems:
- **Shortest Subarray with Sum at Least K** (LeetCode #862) - Hard
- **Constrained Subsequence Sum** (LeetCode #1425) - Hard

---

## 🔧 Implementation Tips

### Stack Implementation:
```javascript
// Array-based stack
const stack = [];
stack.push(item);    // O(1)
const top = stack.pop(); // O(1)
```

### Queue Implementation:
```javascript
// Array-based queue (inefficient)
const queue = [];
queue.push(item);        // O(1) enqueue
const front = queue.shift(); // O(n) dequeue

// Better: Use two stacks or circular buffer
```

### Deque Implementation:
```javascript
// Use array with both ends
const deque = [];
deque.push(item);     // Add to rear
deque.unshift(item);  // Add to front
deque.pop();          // Remove from rear
deque.shift();        // Remove from front
```

---

## 🚀 Getting Started Options

1. **Implement basic Stack and Queue classes** with all operations
2. **Practice with parentheses matching** to understand stack fundamentals
3. **Explore monotonic stack pattern** with temperature problems
4. **Design custom data structures** like MinStack

Which approach would help you master stack and queue concepts most effectively?