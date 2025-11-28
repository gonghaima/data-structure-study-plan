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
- **Time to solve:** 35-45 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 4: Daily Temperatures ⭐⭐⭐ (Medium)

**LeetCode #739**

- **Why crucial:** Monotonic stack pattern for next greater element
- **Key concepts:** Monotonic stack, index tracking, temperature comparison
- **Time to solve:** 40-50 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 5: Sliding Window Maximum ⭐⭐⭐ (Hard)

**LeetCode #239**

- **Why essential:** Deque for sliding window optimization
- **Key concepts:** Deque operations, window maintenance, maximum tracking
- **Time to solve:** 50-60 minutes
- **Expected complexity:** O(n) time, O(k) space

---

## 🧠 Core Concepts to Master

### LIFO vs FIFO Principles
- Stack: Last In, First Out operations
- Queue: First In, First Out operations
- When to use each data structure

### Stack Implementation Patterns
- Array-based vs linked list implementation
- Push, pop, peek operations
- Stack overflow and underflow handling

### Monotonic Stack/Queue
- Maintaining order while processing elements
- Next greater/smaller element problems
- Sliding window optimizations

### Deque (Double-ended Queue)
- Operations at both ends
- Sliding window maximum/minimum
- Efficient insertion and deletion

---

## 📋 Study Approach for Each Problem

### Step 1: Understand the Pattern (10-15 minutes)
- Identify if it's a stack or queue problem
- Recognize LIFO/FIFO requirements
- Consider monotonic properties

### Step 2: Design the Approach (10-15 minutes)
- Choose appropriate data structure
- Plan push/pop or enqueue/dequeue operations
- Handle edge cases (empty stack/queue)

### Step 3: Implement (25-35 minutes)
- Code the solution step by step
- Test with simple examples
- Verify stack/queue state at each step

### Step 4: Optimize & Review (10-15 minutes)
- Check for unnecessary operations
- Verify time and space complexity
- Compare with standard solutions

---

## 🎯 This Week's Goal

Complete these 5 problems over 5-6 days, spending about 1-2 hours per problem. This will give you mastery of:

- Stack and queue operations
- Expression evaluation techniques
- Monotonic stack patterns
- Sliding window with deque

---

## 📝 Related Problems to Practice

### Stack Problems:
- **Baseball Game** (LeetCode #682) - Stack simulation
- **Remove All Adjacent Duplicates** (LeetCode #1047) - Stack for removal
- **Asteroid Collision** (LeetCode #735) - Stack collision simulation

### Queue Problems:
- **Implement Queue using Stacks** (LeetCode #232) - Queue design
- **Number of Recent Calls** (LeetCode #933) - Queue for time windows
- **Design Circular Queue** (LeetCode #622) - Circular buffer

### Monotonic Stack/Queue:
- **Next Greater Element I** (LeetCode #496) - Basic monotonic stack
- **Largest Rectangle in Histogram** (LeetCode #84) - Advanced monotonic stack
- **Shortest Subarray with Sum at Least K** (LeetCode #862) - Monotonic deque

### Advanced Applications:
- **Trapping Rain Water** (LeetCode #42) - Stack for area calculation
- **Maximal Rectangle** (LeetCode #85) - Stack + dynamic programming
- **Constrained Subsequence Sum** (LeetCode #1425) - Deque optimization

---

## 🚀 Key Insights for Interview Success

### Stack Patterns:
1. **Matching/Balancing:** Parentheses, brackets, tags
2. **Expression Evaluation:** Infix, postfix, prefix notation
3. **Monotonic Stack:** Next greater/smaller elements
4. **Simulation:** Game states, undo operations

### Queue Patterns:
1. **BFS Traversal:** Level-order processing
2. **Sliding Window:** Fixed-size window problems
3. **Rate Limiting:** Time-based constraints
4. **Producer-Consumer:** Buffering scenarios

### When to Use Each:
- **Stack:** When you need to reverse order or match pairs
- **Queue:** When you need to maintain order or process in sequence
- **Deque:** When you need efficient operations at both ends

---

## 💡 Pro Tips

1. **Visualize the Stack/Queue:** Draw the state changes
2. **Handle Empty Cases:** Always check before pop/dequeue
3. **Consider Space Optimization:** Can you use the input array as stack?
4. **Practice Implementation:** Know how to implement from scratch
5. **Recognize Patterns:** Many problems follow similar templates