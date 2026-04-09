/**
 * Solution 2: Iterative with explicit node + child-index tracking
 *
 * Simulate the call stack manually: each stack frame stores the node and the
 * index of the next child to visit. This avoids re-pushing children all at once
 * and mirrors how the OS call stack works during recursion.
 *
 * Time: O(n) — visit each node once
 * Space: O(h) — stack depth equals tree height h (better than O(n) when tree is tall and narrow)
 *
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];

    const result = [];
    // Each frame: [node, nextChildIndex]
    const stack = [[root, 0]];
    result.push(root.val);

    while (stack.length > 0) {
        const frame = stack[stack.length - 1];
        const [node, idx] = frame;

        if (idx < node.children.length) {
            const child = node.children[idx];
            frame[1]++; // advance to next child before pushing
            stack.push([child, 0]);
            result.push(child.val);
        } else {
            stack.pop();
        }
    }

    return result;
};

module.exports = preorder;
