// Hash Map + Min Heap (O(n log k))
const MinHeap = require('../../utils/MinHeap');

function topKFrequent(nums, k) {
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);
  const heap = new MinHeap();
  for (const [num, count] of freq.entries()) {
    heap.push([count, num]);
    if (heap.size() > k) heap.pop();
  }
  const res = [];
  while (heap.size()) {
    res.push(heap.pop()[1]);
  }
  return res;
}

module.exports = topKFrequent;
