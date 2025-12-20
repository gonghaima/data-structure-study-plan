/**
 * Segment Tree Solution - O(n log n) time, O(n) space
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Uses segment tree for range maximum queries
// Good balance between complexity and performance

var constrainedSubsetSum = function(nums, k) {
    const n = nums.length;
    const dp = new Array(n);
    
    class SegmentTree {
        constructor(size) {
            this.size = size;
            this.tree = new Array(4 * size).fill(-Infinity);
        }
        
        update(node, start, end, idx, val) {
            if (start === end) {
                this.tree[node] = val;
            } else {
                const mid = Math.floor((start + end) / 2);
                if (idx <= mid) {
                    this.update(2 * node, start, mid, idx, val);
                } else {
                    this.update(2 * node + 1, mid + 1, end, idx, val);
                }
                this.tree[node] = Math.max(this.tree[2 * node], this.tree[2 * node + 1]);
            }
        }
        
        query(node, start, end, l, r) {
            if (r < start || end < l) return -Infinity;
            if (l <= start && end <= r) return this.tree[node];
            
            const mid = Math.floor((start + end) / 2);
            return Math.max(
                this.query(2 * node, start, mid, l, r),
                this.query(2 * node + 1, mid + 1, end, l, r)
            );
        }
    }
    
    const st = new SegmentTree(n);
    
    for (let i = 0; i < n; i++) {
        const left = Math.max(0, i - k);
        const maxPrev = i === 0 ? 0 : st.query(1, 0, n - 1, left, i - 1);
        dp[i] = nums[i] + Math.max(0, maxPrev);
        st.update(1, 0, n - 1, i, dp[i]);
    }
    
    return Math.max(...dp);
};

module.exports = constrainedSubsetSum;