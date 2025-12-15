/**
 * Stack + HashMap Approach (Optimal)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const nextGreaterMap = new Map();
    const stack = [];
    
    // Build next greater element map for nums2
    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            nextGreaterMap.set(stack.pop(), num);
        }
        stack.push(num);
    }
    
    // Map results for nums1
    return nums1.map(num => nextGreaterMap.get(num) || -1);
};

module.exports = nextGreaterElement;