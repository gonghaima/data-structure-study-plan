# Stacks and Queues Problems - Week 3

## 🎯 Third Week - Stacks and Queues Problems

### Problem 1: Valid Parentheses ⭐ (Easy - Perfect Starting Point)

**LeetCode #20**

- **Why start here:** Fundamental stack application and pattern matching
- **Key concepts:** LIFO principle, stack push/pop operations, matching pairs
- **Time to solve:** 20-30 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 2: Min Stack ⭐⭐ (Medium)

**LeetCode #155**

- **Why next:** Introduces auxiliary data structure and constant-time operations
- **Key concepts:** Stack design, tracking minimum, space-time tradeoffs
- **Time to solve:** 30-40 minutes
- **Expected complexity:** O(1) for all operations, O(n) space

### Problem 3: Evaluate Reverse Polish Notation ⭐⭐ (Medium)

**LeetCode #150**

- **Why important:** Classic stack application for expression evaluation
- **Key concepts:** Postfix notation, operator handling, stack-based computation
- **Time to solve:** 25-35 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 4: Daily Temperatures ⭐⭐ (Medium)

**LeetCode #739**

- **Why crucial:** Introduction to monotonic stack pattern
- **Key concepts:** Monotonic decreasing stack, next greater element pattern
- **Time to solve:** 35-45 minutes
- **Expected complexity:** O(n) time, O(n) space

### Problem 5: Sliding Window Maximum ⭐⭐⭐ (Hard)

**LeetCode #239**

- **Why essential:** Advanced deque application and sliding window technique
- **Key concepts:** Monotonic deque, window optimization, index tracking
- **Time to solve:** 45-60 minutes
- **Expected complexity:** O(n) time, O(k) space

---

## 🧠 Core Concepts to Master

### LIFO vs FIFO Principles
- Stack: Last In First Out
- Queue: First In First Out
- When to use each structure

### Stack Applications
- Parentheses/bracket matching
- Expression evaluation
- Function call stack simulation
- Backtracking problems

### Queue Applications
- BFS traversal
- Level-order processing
- Task scheduling
- Sliding window problems

### Monotonic Stack/Queue
- Maintaining order invariant
- Next greater/smaller element
- Sliding window maximum/minimum
- O(n) solutions to range queries

### Deque (Double-Ended Queue)
- Operations at both ends
- Sliding window optimization
- Palindrome checking
- Efficient insertions/deletions

---

## 📋 Study Approach for Each Problem

### Step 1: Understand the Pattern (10-15 minutes)
- Identify if it's a stack or queue problem
- Recognize monotonic patterns
- Consider edge cases (empty, single element)

### Step 2: Design the Solution (10-15 minutes)
- Choose appropriate data structure
- Plan push/pop or enqueue/dequeue operations
- Consider auxiliary structures if needed

### Step 3: Implement (20-30 minutes)
- Code the solution step by step
- Handle edge cases properly
- Test with examples

### Step 4: Optimize & Review (10-15 minutes)
- Verify time/space complexity
- Check for unnecessary operations
- Compare with optimal solutions

---

## 🎯 This Week's Goal

Complete these 5 problems over 4-5 days, spending about 1-1.5 hours per problem. This will give you mastery of:

- Stack and queue operations
- Monotonic stack/queue patterns
- Expression evaluation techniques
- Sliding window optimizations

---

## 📝 Related Problems

### Stack Problems
- **Implement Stack using Queues** (LeetCode #225)
- **Backspace String Compare** (LeetCode #844)
- **Remove All Adjacent Duplicates In String** (LeetCode #1047)
- **Asteroid Collision** (LeetCode #735)
- **Decode String** (LeetCode #394)

### Queue Problems
- **Implement Queue using Stacks** (LeetCode #232)
- **Design Circular Queue** (LeetCode #622)
- **Number of Recent Calls** (LeetCode #933)
- **Design Hit Counter** (LeetCode #362)

### Monotonic Stack/Queue
- **Next Greater Element I** (LeetCode #496)
- **Next Greater Element II** (LeetCode #503)
- **Largest Rectangle in Histogram** (LeetCode #84)
- **Trapping Rain Water** (LeetCode #42)
- **Maximal Rectangle** (LeetCode #85)

### Deque Problems
- **Shortest Subarray with Sum at Least K** (LeetCode #862)
- **Jump Game VI** (LeetCode #1696)
- **Constrained Subsequence Sum** (LeetCode #1425)

---

## 🔑 Key Patterns to Recognize

### Pattern 1: Matching/Validation
- Use stack for nested structures
- Push opening elements, pop on closing
- Examples: Valid Parentheses, Valid HTML

### Pattern 2: Monotonic Stack
- Maintain increasing or decreasing order
- Find next greater/smaller elements
- Examples: Daily Temperatures, Next Greater Element

### Pattern 3: Expression Evaluation
- Use stack for operators and operands
- Handle precedence and associativity
- Examples: RPN, Basic Calculator

### Pattern 4: Sliding Window with Deque
- Maintain window invariant
- Remove elements outside window
- Examples: Sliding Window Maximum, Shortest Subarray

---

## 💡 Common Pitfalls to Avoid

1. **Forgetting edge cases:** Empty stack/queue, single element
2. **Wrong data structure:** Using stack when queue is needed
3. **Index tracking:** Losing track of original indices in monotonic problems
4. **Deque operations:** Confusing front/back operations
5. **Space optimization:** Not recognizing when auxiliary structure is needed

---

## 🚀 Advanced Topics After These 5

Once comfortable with the basics, explore:

- **Design Problems:** LRU Cache, LFU Cache
- **Hard Stack Problems:** Largest Rectangle, Maximal Rectangle
- **Priority Queue:** Merge K Sorted Lists, Find Median from Data Stream
- **Advanced Deque:** Constrained Subsequence Sum

---

## 📊 Progress Tracking

- [ ] Valid Parentheses
- [ ] Min Stack
- [ ] Evaluate Reverse Polish Notation
- [ ] Daily Temperatures
- [ ] Sliding Window Maximum

**Target:** Complete all 5 problems with optimal solutions and understand the underlying patterns.
