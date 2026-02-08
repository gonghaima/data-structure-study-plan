// SETUP_TEMPLATE.md

# Design HashMap

## Problem
Implement a HashMap without using any built-in hash table libraries.

## Setup
- Create a class `MyHashMap` with methods: `put(key, value)`, `get(key)`, and `remove(key)`.
- Use arrays or linked lists for collision handling.
- Write tests to cover basic operations and edge cases.

## Example
```
Input: ["put", 1, 1], ["put", 2, 2], ["get", 1], ["get", 3], ["put", 2, 1], ["get", 2], ["remove", 2], ["get", 2]
Output: [null, null, 1, -1, null, 1, null, -1]
```

## Notes
- All values are non-negative.
- Keys and values are integers.
- Use chaining or open addressing for collision resolution.
