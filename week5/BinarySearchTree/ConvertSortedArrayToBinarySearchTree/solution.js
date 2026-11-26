/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Recursive divide and conquer: the middle element becomes the root,
 * the left half builds the left subtree, the right half builds the right.
 * Picking the middle keeps both halves within one element of each other,
 * so the tree is height-balanced.
 *
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const build = (lo, hi) => {
    if (lo > hi) return null;

    const mid = Math.floor((lo + hi) / 2);
    return {
      val: nums[mid],
      left: build(lo, mid - 1),
      right: build(mid + 1, hi),
    };
  };

  return build(0, nums.length - 1);
};

module.exports = sortedArrayToBST;
