// Solution 3: Rabin-Karp Rolling Hash
// Time: O(n + m*k), Space: O(m) where k = word length

var findSubstring = function(s, words) {
    if (!s || !words || words.length === 0) return [];
    
    const wordLen = words[0].length;
    const totalLen = wordLen * words.length;
    const base = 256;
    const mod = 1e9 + 7;
    
    // Calculate hash for each word
    const wordHashes = new Map();
    for (const word of words) {
        const hash = getHash(word, base, mod);
        wordHashes.set(hash, (wordHashes.get(hash) || 0) + 1);
    }
    
    const result = [];
    const pow = Math.pow(base, wordLen - 1) % mod;
    
    for (let i = 0; i <= s.length - totalLen; i++) {
        const hashCount = new Map();
        let valid = true;
        
        for (let j = 0; j < words.length; j++) {
            const start = i + j * wordLen;
            const hash = getHash(s.substring(start, start + wordLen), base, mod);
            
            if (!wordHashes.has(hash)) {
                valid = false;
                break;
            }
            
            hashCount.set(hash, (hashCount.get(hash) || 0) + 1);
            if (hashCount.get(hash) > wordHashes.get(hash)) {
                valid = false;
                break;
            }
        }
        
        if (valid) result.push(i);
    }
    
    return result;
};

function getHash(str, base, mod) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * base + str.charCodeAt(i)) % mod;
    }
    return hash;
}

module.exports = findSubstring;