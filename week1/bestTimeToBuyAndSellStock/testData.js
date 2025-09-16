/**
 * Test data for Best Time to Buy and Sell Stock problem
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: { prices: [7, 1, 5, 3, 6, 4] },
            expected: 5
        },
        {
            description: 'No profit possible - decreasing prices',
            input: { prices: [7, 6, 4, 3, 1] },
            expected: 0
        },
        {
            description: 'Single day - no transaction possible',
            input: { prices: [5] },
            expected: 0
        },
        {
            description: 'Two days - profit possible',
            input: { prices: [1, 5] },
            expected: 4
        },
        {
            description: 'Two days - no profit possible',
            input: { prices: [5, 1] },
            expected: 0
        }
    ],

    edgeCasesWithDifferentPricePatterns: [
        {
            description: 'All same prices',
            input: { prices: [3, 3, 3, 3, 3] },
            expected: 0
        },
        {
            description: 'Strictly increasing prices',
            input: { prices: [1, 2, 3, 4, 5] },
            expected: 4
        },
        {
            description: 'Strictly decreasing prices',
            input: { prices: [5, 4, 3, 2, 1] },
            expected: 0
        },
        {
            description: 'V-shaped pattern',
            input: { prices: [5, 3, 1, 4, 6] },
            expected: 5
        },
        {
            description: 'Inverted V-shaped pattern',
            input: { prices: [1, 4, 6, 3, 2] },
            expected: 5
        }
    ],

    complexScenarios: [
        {
            description: 'Multiple peaks and valleys',
            input: { prices: [3, 2, 6, 5, 0, 3] },
            expected: 4
        },
        {
            description: 'Best profit at the end',
            input: { prices: [2, 4, 1, 7] },
            expected: 6
        },
        {
            description: 'Best profit at the beginning',
            input: { prices: [1, 5, 3, 2, 1] },
            expected: 4
        },
        {
            description: 'Zigzag pattern',
            input: { prices: [1, 3, 2, 4, 1, 5] },
            expected: 4
        },
        {
            description: 'Late minimum with high maximum',
            input: { prices: [6, 1, 3, 2, 4, 7] },
            expected: 6
        }
    ],

    boundaryConditions: [
        {
            description: 'Minimum price is zero',
            input: { prices: [0, 1, 2, 3] },
            expected: 3
        },
        {
            description: 'Maximum price constraint',
            input: { prices: [10000, 0, 5000] },
            expected: 5000
        },
        {
            description: 'Large price differences',
            input: { prices: [1, 10000] },
            expected: 9999
        },
        {
            description: 'Small price differences',
            input: { prices: [100, 101, 99, 102] },
            expected: 3
        }
    ],

    performanceAndLargeArrays: [
        {
            description: 'Large array with optimal at start',
            input: { 
                prices: [1, 1000, ...Array.from({length: 98}, () => 500)]
            },
            expected: 999
        },
        {
            description: 'Large array with optimal at end',
            input: { 
                prices: [...Array.from({length: 98}, () => 500), 1, 1000]
            },
            expected: 999
        },
        {
            description: 'Large array with no profit',
            input: { 
                prices: Array.from({length: 100}, (_, i) => 100 - i)
            },
            expected: 0
        },
        {
            description: 'Large array with maximum profit',
            input: { 
                prices: Array.from({length: 100}, (_, i) => i + 1)
            },
            expected: 99
        }
    ],

    mathematicalCorrectness: [
        {
            description: 'Profit calculation verification',
            input: { prices: [2, 7, 1, 8] },
            expected: 7
        },
        {
            description: 'Must buy before sell constraint',
            input: { prices: [5, 1, 3] },
            expected: 2
        },
        {
            description: 'Multiple valid transactions - choose maximum',
            input: { prices: [1, 2, 4, 2, 5, 7, 2, 4, 9, 0] },
            expected: 8
        },
        {
            description: 'Early high price should not affect later optimal',
            input: { prices: [10, 1, 5] },
            expected: 4
        }
    ],

    specialCases: [
        {
            description: 'Alternating high-low pattern',
            input: { prices: [10, 1, 10, 1, 10] },
            expected: 9
        },
        {
            description: 'Gradual increase then sharp drop',
            input: { prices: [1, 2, 3, 4, 5, 0] },
            expected: 4
        },
        {
            description: 'Sharp increase then gradual decrease',
            input: { prices: [1, 10, 9, 8, 7, 6] },
            expected: 9
        },
        {
            description: 'Multiple equal minimums',
            input: { prices: [1, 5, 1, 6, 1, 7] },
            expected: 6
        },
        {
            description: 'Multiple equal maximums',
            input: { prices: [1, 7, 3, 7, 2, 7] },
            expected: 6
        }
    ]
};

module.exports = testData;