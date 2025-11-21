// Test data for 'Substring with Concatenation of All Words'

module.exports = [
  {
    input: { s: 'barfoothefoobarman', words: ['foo', 'bar'] },
    output: [0, 9],
  },
  {
    input: {
      s: 'wordgoodgoodgoodbestword',
      words: ['word', 'good', 'best', 'word'],
    },
    output: [],
  },
  {
    input: { s: 'barfoofoobarthefoobarman', words: ['bar', 'foo', 'the'] },
    output: [6, 9, 12],
  },
  // Add more edge cases as needed
];
