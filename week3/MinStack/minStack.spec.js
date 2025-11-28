const MinStack = require('./solution2');
const testData = require('./testData');

/**
 * Helper function to execute a sequence of operations on MinStack
 */
function executeOperations(operations, inputs) {
    let minStack = null;
    const results = [];
    
    for (let i = 0; i < operations.length; i++) {
        const operation = operations[i];
        const input = inputs[i];
        
        switch (operation) {
            case 'MinStack':
                minStack = new MinStack();
                results.push(null);
                break;
            case 'push':
                results.push(minStack.push(input[0]));
                break;
            case 'pop':
                results.push(minStack.pop());
                break;
            case 'top':
                results.push(minStack.top());
                break;
            case 'getMin':
                results.push(minStack.getMin());
                break;
        }
    }
    
    return results;
}

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
    testCases.forEach(testCase => {
        const { description, operations, inputs, expected } = testCase;
        
        test(`should ${description}`, () => {
            const result = executeOperations(operations, inputs);
            expect(result).toEqual(expected);
        });
    });
}

describe('Min Stack - LeetCode #155', () => {
    describe('Basic functionality', () => {
        runTestCases(testData.basicFunctionality);
    });

    describe('Edge cases', () => {
        runTestCases(testData.edgeCases);
    });

    describe('Special cases', () => {
        runTestCases(testData.specialCases);
    });

    describe('Performance tests', () => {
        runTestCases(testData.performanceTests);
    });
});