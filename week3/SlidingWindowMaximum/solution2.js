/**
 * Max-Heap solution: O(n log k)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MaxHeap {
  constructor() {
    this.heap = [];
  }
  push(val, idx) {
    this.heap.push([val, idx]);
    this._siftUp();
  }
  pop() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length) {
      this.heap[0] = last;
      this._siftDown();
    }
    return top;
  }
  top() {
    return this.heap[0];
  }
  _siftUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.heap[p][0] >= this.heap[i][0]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }
  _siftDown() {
    let i = 0;
    while (2 * i + 1 < this.heap.length) {
      let j = 2 * i + 1;
      if (j + 1 < this.heap.length && this.heap[j + 1][0] > this.heap[j][0])
        j++;
      if (this.heap[i][0] >= this.heap[j][0]) break;
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
      i = j;
    }
  }
}

function maxSlidingWindow(nums, k) {
  const res = [];
  const heap = new MaxHeap();
  for (let i = 0; i < k; i++) heap.push(nums[i], i);
  res.push(heap.top()[0]);
  for (let i = k; i < nums.length; i++) {
    heap.push(nums[i], i);
    while (heap.top()[1] <= i - k) heap.pop();
    res.push(heap.top()[0]);
  }
  return res;
}

module.exports = maxSlidingWindow;
