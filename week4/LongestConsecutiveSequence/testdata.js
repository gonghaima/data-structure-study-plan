// Test data for Longest Consecutive Sequence problem
// You can add more test cases as needed
module.exports = [
  {
    input: [[100,4,200,1,3,2]],
    expected: 4 // The longest consecutive sequence is [1,2,3,4]
  },
  {
    input: [[0,3,7,2,5,8,4,6,0,1]],
    expected: 9 // The longest consecutive sequence is [0,1,2,3,4,5,6,7,8]
  },
  {
    input: [[1,2,0,1]],
    expected: 3 // The longest consecutive sequence is [0,1,2]
  },
  {
    input: [[9,1,-3,2,4,8,3,-1,6,-2,-4,7]],
    expected: 4 // The longest consecutive sequence is [-4,-3,-2,-1]
  }
];
