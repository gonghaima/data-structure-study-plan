const isSubtree = require('./solution');
const isSubtree1 = require('./solution1');
const isSubtree2 = require('./solution2');
const testData = require('./testData');

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases, solutionFn, solutionName) {
    testCases.forEach(testCase => {
        const { description, root, subRoot, expected } = testCase;

        test(`${solutionName}: should ${description}`, () => {
            expect(solutionFn(root, subRoot)).toBe(expected);
        });
    });
}

describe('Subtree of Another Tree - LeetCode #572', () => {
    const solutions = [
        { fn: isSubtree, name: 'Postorder Serialization' },
        { fn: isSubtree1, name: 'Preorder Serialization' },
        { fn: isSubtree2, name: 'Brute-force Recursive' }
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
