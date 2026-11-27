/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Recursive divide and conquer using array slices.
 * The middle element is the root; the function calls itself on a copy
 * of the left half and a copy of the right half. Simplest to read, but
 * every level of recursion copies the array.
 *
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;

  const mid = Math.floor(nums.length / 2);
  return {
    val: nums[mid],
    left: sortedArrayToBST(nums.slice(0, mid)),
    right: sortedArrayToBST(nums.slice(mid + 1)),
  };
};

module.exports = sortedArrayToBST;
