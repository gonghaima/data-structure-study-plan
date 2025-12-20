/**
 * Priority Queue (Max Heap) Solution - O(n log k) time, O(k) space
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    const n = nums.length;
    const dp = new Array(n);
    const maxHeap = [];
    
    const heapPush = (heap, item) => {
        heap.push(item);
        let i = heap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (heap[parent][0] >= heap[i][0]) break;
            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }
    };
    
    const heapPop = (heap) => {
        if (heap.length === 0) return null;
        const max = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            while (true) {
                let largest = i;
                const left = 2 * i + 1;
                const right = 2 * i + 2;
                
                if (left < heap.length && heap[left][0] > heap[largest][0]) {
                    largest = left;
                }
                if (right < heap.length && heap[right][0] > heap[largest][0]) {
                    largest = right;
                }
                if (largest === i) break;
                
                [heap[i], heap[largest]] = [heap[largest], heap[i]];
                i = largest;
            }
        }
        return max;
    };
    
    for (let i = 0; i < n; i++) {
        while (maxHeap.length && maxHeap[0][1] < i - k) {
            heapPop(maxHeap);
        }
        
        dp[i] = nums[i] + (maxHeap.length ? maxHeap[0][0] : 0);
        
        if (dp[i] > 0) {
            heapPush(maxHeap, [dp[i], i]);
        }
    }
    
    return Math.max(...dp);
};

module.exports = constrainedSubsetSum;