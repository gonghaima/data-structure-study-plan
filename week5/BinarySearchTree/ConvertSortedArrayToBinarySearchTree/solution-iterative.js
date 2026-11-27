/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Iterative divide and conquer with an explicit stack.
 * Each stack entry is a node waiting for its value plus the index range
 * [lo, hi] it is responsible for. The node takes the middle value, then
 * pushes a child for each non-empty half.
 *
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;

  const root = { val: 0, left: null, right: null };
  const stack = [[root, 0, nums.length - 1]];

  while (stack.length) {
    const [node, lo, hi] = stack.pop();
    const mid = Math.floor((lo + hi) / 2);
    node.val = nums[mid];

    if (lo <= mid - 1) {
      node.left = { val: 0, left: null, right: null };
      stack.push([node.left, lo, mid - 1]);
    }
    if (mid + 1 <= hi) {
      node.right = { val: 0, left: null, right: null };
      stack.push([node.right, mid + 1, hi]);
    }
  }

  return root;
};

module.exports = sortedArrayToBST;
