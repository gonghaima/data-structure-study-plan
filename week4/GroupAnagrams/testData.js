/**
 * Test data for Group Anagrams
 * Organized by test categories for better maintainability
 */

const testData = {
    basicFunctionality: [
        {
            description: 'Basic case from LeetCode example 1',
            input: ["eat","tea","tan","ate","nat","bat"],
            expected: [["bat"],["nat","tan"],["ate","eat","tea"]]
        },
        {
            description: 'Basic case from LeetCode example 2',
            input: [""],
            expected: [[""]]
        },
        {
            description: 'Basic case from LeetCode example 3',
            input: ["a"],
            expected: [["a"]]
        }
    ],

    edgeCases: [
        {
            description: 'Empty array',
            input: [],
            expected: []
        },
        {
            description: 'All same characters',
            input: ["aaa", "aaa", "aaa"],
            expected: [["aaa", "aaa", "aaa"]]
        },
        {
            description: 'No anagrams',
            input: ["abc", "def", "ghi"],
            expected: [["abc"], ["def"], ["ghi"]]
        }
    ],

    performanceTests: [
        {
            description: 'Large array with mixed anagrams',
            input: Array.from({length: 100}, (_, i) => 
                i % 3 === 0 ? "abc" : i % 3 === 1 ? "bca" : "cab"
            ),
            expected: [Array(100).fill().map((_, i) => 
                i % 3 === 0 ? "abc" : i % 3 === 1 ? "bca" : "cab"
            )]
        }
    ],

    specialCases: [
        {
            description: 'Mixed length anagrams',
            input: ["ab", "ba", "abc", "bca", "cab"],
            expected: [["ab", "ba"], ["abc", "bca", "cab"]]
        },
        {
            description: 'Single character strings',
            input: ["a", "b", "a", "c", "b"],
            expected: [["a", "a"], ["b", "b"], ["c"]]
        }
    ]
};

module.exports = testData;