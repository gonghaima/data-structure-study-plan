// Solution 2: Union-Find (Disjoint Set Union)
// Time: O(n), Space: O(n)
class UnionFind {
  constructor(nums) {
    this.parent = new Map();
    this.size = new Map();
    for (const num of nums) {
      this.parent.set(num, num);
      this.size.set(num, 1);
    }
  }
  find(x) {
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x)));
    }
    return this.parent.get(x);
  }
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX === rootY) return;
    this.parent.set(rootX, rootY);
    this.size.set(rootY, this.size.get(rootY) + this.size.get(rootX));
  }
  getMaxSize() {
    return Math.max(...this.size.values());
  }
}

module.exports = function longestConsecutive(nums) {
  if (nums.length === 0) return 0;
  const uf = new UnionFind(nums);
  const numSet = new Set(nums);
  for (const num of nums) {
    if (numSet.has(num + 1)) {
      uf.union(num, num + 1);
    }
  }
  return uf.getMaxSize();
};
