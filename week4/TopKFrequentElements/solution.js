// Hash Map + Bucket Sort (O(n))
module.exports = function topKFrequent(nums, k) {
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);
  const buckets = Array(nums.length + 1).fill().map(() => []);
  for (const [num, count] of freq.entries()) buckets[count].push(num);
  const res = [];
  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
    for (const n of buckets[i]) {
      res.push(n);
      if (res.length === k) break;
    }
  }
  return res;
};
