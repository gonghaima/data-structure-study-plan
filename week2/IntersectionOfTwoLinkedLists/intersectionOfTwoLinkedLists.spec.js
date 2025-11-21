const getIntersectionNode = require('./solution3');
const { testData } = require('./testData');

/**
 * Helper function to run test cases from data
 */
function runTestCases(testCases) {
    testCases.forEach((testCase, index) => {
        const { description, setup, expectedVal } = testCase;
        
        test(`should ${description}`, () => {
            const { headA, headB, intersection } = setup();
            const result = getIntersectionNode(headA, headB);
            
            if (expectedVal === null) {
                expect(result).toBeNull();
            } else {
                expect(result).not.toBeNull();
                expect(result.val).toBe(expectedVal);
            }
        });
    });
}

describe('Intersection of Two Linked Lists - LeetCode #160', () => {
    describe('Basic functionality', () => {
        runTestCases(testData.basicFunctionality);
    });

    describe('Edge cases', () => {
        runTestCases(testData.edgeCases);
    });

    describe('Performance tests', () => {
        runTestCases(testData.performanceTests);
    });

    describe('Special cases', () => {
        runTestCases(testData.specialCases);
    });
});