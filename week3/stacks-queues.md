# Stacks and Queues Problems - Week 3

## 🎯 Third Week - Stacks and Queues Problems

### Problem 1: Valid Parentheses ⭐ (Easy - Perfect Starting Point)

**LeetCode #20**

- **Why start here:** Fundamental stack operations and LIFO principle
- **Key concepts:** Stack push/pop, character matching, balanced expressions
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

- **Why important:** Stack-based expression evaluation and operator handling
- **Key concepts:** Postfix notation, operand stacking, operator processing
- **Time to solve:** 25-35 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 4: Daily Temperatures ⭐⭐ (Medium)

**LeetCode #739**

- **Why crucial:** Monotonic stack pattern and next greater element concept
- **Key concepts:** Monotonic decreasing stack, index tracking, result array
- **Time to solve:** 35-45 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 5: Sliding Window Maximum ⭐⭐⭐ (Hard)

**LeetCode #239**

- **Why essential:** Deque usage and sliding window optimization
- **Key concepts:** Monotonic deque, window maintenance, maximum tracking
- **Time to solve:** 45-60 minutes
- **Expected complexity:** O(n) time, O(k) space

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
- Maintaining order properties
- Next greater/smaller element problems
- Sliding window optimizations

### Design Patterns
- Auxiliary data structures
- Two-stack queue implementation
- Stack-based recursion simulation

---

## 📋 Study Approach for Each Problem

### Step 1: Understand Data Structure (10-15 minutes)
- Identify LIFO vs FIFO requirements
- Choose appropriate data structure
- Consider space-time tradeoffs

### Step 2: Plan Algorithm (10-15 minutes)
- Map problem to stack/queue operations
- Handle edge cases (empty, single element)
- Design auxiliary structures if needed

### Step 3: Implement (25-35 minutes)
- Code step by step with clear operations
- Test with example inputs
- Verify boundary conditions

### Step 4: Optimize & Review (10-15 minutes)
- Check for unnecessary operations
- Verify complexity requirements
- Compare with standard patterns

---

## 🎯 This Week's Goal

Complete these 5 problems over 4-5 days, spending about 1-1.5 hours per problem. This will give you mastery of:

- Stack and queue fundamentals
- Monotonic data structure patterns
- Expression evaluation techniques
- Sliding window optimizations

---

## 📝 Related LeetCode Problems

### Stack Problems:
- **Implement Stack using Queues** (LeetCode #225)
- **Baseball Game** (LeetCode #682)
- **Next Greater Element I** (LeetCode #496)
- **Largest Rectangle in Histogram** (LeetCode #84)
- **Trapping Rain Water** (LeetCode #42)

### Queue Problems:
- **Implement Queue using Stacks** (LeetCode #232)
- **Design Circular Queue** (LeetCode #622)
- **Moving Average from Data Stream** (LeetCode #346)
- **Number of Islands** (LeetCode #200) - BFS approach

### Deque Problems:
- **Shortest Subarray with Sum at Least K** (LeetCode #862)
- **Constrained Subsequence Sum** (LeetCode #1425)
- **Jump Game VI** (LeetCode #1696)

---

## 🔧 Common Implementation Patterns

### Stack using Array:
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

### Queue using Array:
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

### Monotonic Stack Pattern:
```javascript
function nextGreaterElement(nums) {
    const stack = [];
    const result = new Array(nums.length).fill(-1);
    
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            const index = stack.pop();
            result[index] = nums[i];
        }
        stack.push(i);
    }
    
    return result;
}
```

---

## 🚀 Getting Started Options

1. **Implement basic Stack and Queue classes** with all operations
2. **Practice with parentheses matching** to understand stack fundamentals
3. **Explore monotonic stack pattern** with temperature problems
4. **Design custom data structures** like MinStack

Which approach would help you master stack and queue concepts most effectively?