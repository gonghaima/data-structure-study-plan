// Solution 1: Optimized Sliding Window
// Time: O(n * m), Space: O(m) where n = s.length, m = words.length

var findSubstring = function(s, words) {
    if (!s || !words || words.length === 0) return [];
    
    const wordLen = words[0].length;
    const totalLen = wordLen * words.length;
    const wordMap = new Map();
    
    for (const word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }
    
    const result = [];
    
    for (let i = 0; i < wordLen; i++) {
        let left = i, count = 0;
        const window = new Map();
        
        for (let right = i; right <= s.length - wordLen; right += wordLen) {
            const word = s.substring(right, right + wordLen);
            
            if (wordMap.has(word)) {
                window.set(word, (window.get(word) || 0) + 1);
                count++;
                
                while (window.get(word) > wordMap.get(word)) {
                    const leftWord = s.substring(left, left + wordLen);
                    window.set(leftWord, window.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }
                
                if (count === words.length) {
                    result.push(left);
                }
            } else {
                window.clear();
                count = 0;
                left = right + wordLen;
            }
        }
    }
    
    return result;
};

module.exports = findSubstring;