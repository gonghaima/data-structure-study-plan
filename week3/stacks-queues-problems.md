# Stacks and Queues Problems - Week 3

## 🎯 Third Week - Stacks and Queues Problems

### Problem 1: Valid Parentheses ⭐ (Easy - Perfect Starting Point)

**LeetCode #20**

- **Why start here:** Fundamental stack operations and LIFO principle
- **Key concepts:** Stack push/pop, matching pairs, balanced expressions
- **Time to solve:** 20-30 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 2: Min Stack ⭐⭐ (Easy-Medium)

**LeetCode #155**

- **Why next:** Stack design with auxiliary data structure
- **Key concepts:** Stack implementation, minimum tracking, space optimization
- **Time to solve:** 30-40 minutes
- **Expected complexity:** O(1) all operations, O(n) space

### Problem 3: Evaluate Reverse Polish Notation ⭐⭐ (Medium)

**LeetCode #150**

- **Why important:** Stack for expression evaluation and operator precedence
- **Key concepts:** Postfix notation, stack-based calculation, operator handling
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

- **Why essential:** Deque for sliding window optimization
- **Key concepts:** Monotonic deque, window maintenance, maximum tracking
- **Time to solve:** 45-60 minutes
- **Expected complexity:** O(n) time, O(k) space

---

## 🧠 Core Concepts to Master

### Stack Operations (LIFO)
- Push and pop operations
- Peek/top without removal
- Empty stack handling
- Stack overflow prevention

### Queue Operations (FIFO)
- Enqueue and dequeue operations
- Front and rear pointers
- Circular queue implementation
- Queue underflow handling

### Monotonic Stack/Queue
- Maintaining order property
- Next greater/smaller element
- Sliding window problems
- Optimization techniques

### Design Patterns
- Stack with minimum tracking
- Queue using two stacks
- Deque for bidirectional access
- Priority queue applications

---

## 📋 Study Approach for Each Problem

### Step 1: Understand Data Structure (10-15 minutes)
- Identify LIFO vs FIFO requirement
- Choose appropriate data structure
- Consider space-time tradeoffs

### Step 2: Plan Algorithm (10-15 minutes)
- Map problem to stack/queue operations
- Handle edge cases (empty, single element)
- Optimize for time/space complexity

### Step 3: Implement (25-35 minutes)
- Code step by step
- Test with examples
- Handle boundary conditions

### Step 4: Optimize & Review (10-15 minutes)
- Verify complexity analysis
- Compare with standard solutions
- Consider alternative approaches

---

## 🎯 This Week's Goal

Complete these 5 problems over 4-5 days, spending about 1-1.5 hours per problem. This will give you mastery of:

- Stack and queue fundamentals
- Monotonic stack patterns
- Expression evaluation
- Sliding window optimization

---

## 📝 Related Problems to Practice

Once comfortable with the basics, tackle:

- **Implement Queue using Stacks** (LeetCode #232)
- **Implement Stack using Queues** (LeetCode #225)
- **Next Greater Element I** (LeetCode #496)
- **Largest Rectangle in Histogram** (LeetCode #84)
- **Trapping Rain Water** (LeetCode #42)

---

## 🔗 Advanced Applications

### Expression Parsing
- Infix to postfix conversion
- Calculator implementation
- Operator precedence handling

### Monotonic Structures
- Next/previous greater elements
- Sliding window maximum/minimum
- Histogram problems

### System Design
- Browser history (stack)
- Task scheduling (queue)
- Undo/redo functionality

---

## 🚀 Implementation Tips

### Stack Implementation
```javascript
class Stack {
    constructor() {
        this.items = [];
    }
    
    push(item) { this.items.push(item); }
    pop() { return this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
    isEmpty() { return this.items.length === 0; }
}
```

### Queue Implementation
```javascript
class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(item) { this.items.push(item); }
    dequeue() { return this.items.shift(); }
    front() { return this.items[0]; }
    isEmpty() { return this.items.length === 0; }
}
```

Which problem would you like to start with to build your stack and queue problem-solving skills?