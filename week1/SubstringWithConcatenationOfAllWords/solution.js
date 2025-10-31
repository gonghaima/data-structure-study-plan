// Solution for 'Substring with Concatenation of All Words'
// Implement your function here

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
/**
 *
 *uses a sliding window and hash maps to 
 efficiently check all possible starting indices 
 and validate the word counts.
 */
var findSubstring = function (s, words) {
  if (!s || !words || words.length === 0) return [];
  const wordLen = words[0].length;
  const numWords = words.length;
  const totalLen = wordLen * numWords;
  const wordCount = {};
  for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
  const res = [];
  for (let i = 0; i <= s.length - totalLen; i++) {
    const seen = {};
    let j = 0;
    while (j < numWords) {
      const word = s.substr(i + j * wordLen, wordLen);
      if (!wordCount[word]) break;
      seen[word] = (seen[word] || 0) + 1;
      if (seen[word] > wordCount[word]) break;
      j++;
    }
    if (j === numWords) res.push(i);
  }
  return res;
};

module.exports = findSubstring;
