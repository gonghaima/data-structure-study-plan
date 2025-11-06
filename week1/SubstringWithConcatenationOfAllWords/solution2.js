// Solution 2: Brute Force with Early Termination
// Time: O(n * m * k), Space: O(m) where k = word length

var findSubstring = function(s, words) {
    if (!s || !words || words.length === 0) return [];
    
    const wordLen = words[0].length;
    const totalLen = wordLen * words.length;
    const result = [];
    
    for (let i = 0; i <= s.length - totalLen; i++) {
        if (isValidConcatenation(s, i, words, wordLen)) {
            result.push(i);
        }
    }
    
    return result;
};

function isValidConcatenation(s, start, words, wordLen) {
    const wordCount = {};
    for (const word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    
    for (let i = 0; i < words.length; i++) {
        const pos = start + i * wordLen;
        const word = s.substring(pos, pos + wordLen);
        
        if (!wordCount[word] || wordCount[word] === 0) {
            return false;
        }
        wordCount[word]--;
    }
    
    return true;
}

module.exports = findSubstring;