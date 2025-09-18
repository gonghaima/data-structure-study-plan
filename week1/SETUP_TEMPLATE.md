# Problem Setup Template

This template can be used to quickly set up new algorithm problems following the established pattern in this study plan.

## File Structure Template

For each new problem, create the following files:

### 1. `question.md` - Formatted Problem Statement
```markdown
# [Number]. [Problem Name]

**Difficulty:** [Easy/Medium/Hard]  
**Status:** [Solved/Unsolved]  
**Topics:** [Array, Hash Table, etc.]  
**Companies:** [Company names]

## Problem Description
[Clear description with key requirements]

## Examples
### Example 1:
```
Input: [input]
Output: [output]
Explanation: [explanation]
```

## Constraints
- [Constraint 1]
- [Constraint 2]

## Key Points
- [Important requirement 1]
- [Important requirement 2]

## Approach Hints
- **Approach 1:** [Description] (O(complexity))
- **Approach 2:** [Description] (O(complexity))
- **Key Insight:** [Main algorithmic insight]
```

### 2. `testData.js` - Comprehensive Test Data
```javascript
/**
 * Test data for [Problem Name]
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: { /* input object */ },
            expected: /* expected result */
        }
        // More basic cases...
    ],

    edgeCases: [
        // Edge cases and boundary conditions
    ],

    performanceTests: [
        // Large array tests
    ],

    specialCases: [
        // Problem-specific scenarios
    ]
};

module.exports = testData;
```

### 3. `[problemName].spec.js` - Test Specification
```javascript
const [functionName] = require('./solution');
const testData = require('./testData');

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
    testCases.forEach(testCase => {
        const { description, input, expected } = testCase;
        
        test(`should ${description}`, () => {
            expect([functionName](input)).toBe(expected);
        });
    });
}

describe('[Problem Name] - LeetCode #[Number]', () => {
    describe('Basic functionality', () => {
        runTestCases(testData.basicFunctionality);
    });

    // More test suites...
});
```

### 4. `solution.js` - Implementation Template
```javascript
/**
 * @param {type} param
 * @return {type}
 */
var [functionName] = function(param) {
    // TODO: Implement your solution here
    // Hint: [Algorithm hint]
    
    return /* default return */;
};

module.exports = [functionName];
```

### 5. `README.md` - Documentation
```markdown
# [Problem Name] Solution

## Overview
This directory contains the solution for [Problem Name] (LeetCode #[Number]).

## Files Structure
- `question.md` - Formatted problem statement
- `testData.js` - Comprehensive test data
- `[problemName].spec.js` - Test specification
- `solution.js` - Main implementation
- `README.md` - This documentation

## Algorithm Approaches
[List different approaches with complexity analysis]

## Usage
```bash
cd week1/[problem-directory]
npm test
```
```

## Quick Setup Script

To quickly scaffold a new problem, you can use this pattern:

1. Create directory: `mkdir week1/[problem-name]`
2. Copy and customize the template files
3. Update the problem-specific details
4. Implement the solution
5. Run tests to verify

## Established Problems

The following problems already follow this structure:
- ✅ **twoSum** - Hash map approach, O(n) solution
- ✅ **bestTimeToBuyAndSellStock** - Single pass tracking, O(n) solution  
- ✅ **containsDuplicate** - Hash set approach, O(n) solution
- ✅ **maximum-subarray** - Kadane's algorithm, O(n) solution

## Benefits of This Structure

- **Consistency** across all problems
- **Maintainability** with separated test data
- **Comprehensive testing** with edge cases
- **Professional documentation** for study reference
- **Easy expansion** for new test cases