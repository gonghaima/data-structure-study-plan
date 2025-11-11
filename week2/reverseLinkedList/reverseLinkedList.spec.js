const reverseList = require('./solution');
const reverseList1 = require('./solution1');
const reverseList2 = require('./solution2');
const { testData, linkedListToArray } = require('./testData');

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases, solutionFn, solutionName) {
    testCases.forEach(testCase => {
        const { description, input, expected } = testCase;
        
        test(`${solutionName}: should ${description}`, () => {
            const result = solutionFn(input);
            const resultArray = linkedListToArray(result);
            expect(resultArray).toEqual(expected);
        });
    });
}

describe('Reverse Linked List - LeetCode #206', () => {
    const solutions = [
        { fn: reverseList, name: 'Iterative' },
        { fn: reverseList1, name: 'Recursive' },
        { fn: reverseList2, name: 'Stack-based' }
    ];

    solutions.forEach(({ fn, name }) => {
        describe(`${name} Solution`, () => {
            describe('Basic functionality', () => {
                runTestCases(testData.basicFunctionality, fn, name);
            });

            describe('Edge cases', () => {
                runTestCases(testData.edgeCases, fn, name);
            });

            describe('Performance tests', () => {
                runTestCases(testData.performanceTests, fn, name);
            });

            describe('Special cases', () => {
                runTestCases(testData.specialCases, fn, name);
            });
        });
    });
});