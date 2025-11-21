# Rabin-Karp Algorithm: Short Explanation

Rabin-Karp is a string searching algorithm that uses hashing to efficiently find a pattern (needle) in a text (haystack).

## How It Works

- Compute a hash value for the pattern and for each substring of the text with the same length.
- Compare hash values; if they match, do a direct string comparison to confirm (to avoid false positives due to hash collisions).
- Use a rolling hash to efficiently update the hash value for each substring as you slide the window.

## Key Points

- **Time Complexity:** O(n + m) average, O(nm) worst case (with many hash collisions)
- **Space Complexity:** O(1) extra
- **Strengths:** Fast for multiple pattern searches and large alphabets
- **Weaknesses:** Hash collisions can degrade performance

## Usage

- Good for substring search, plagiarism detection, and DNA sequence analysis.

## Example

For `haystack = "sadbutsad"`, `needle = "sad"`, Rabin-Karp computes hashes for all substrings of length 3 in `haystack` and compares them to the hash of `needle`.

If a hash matches, it checks the actual substring for equality and returns the index if found.
