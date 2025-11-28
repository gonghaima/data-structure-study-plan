/**
 * Solution 1: Two Stacks Approach
 * Use one stack for values and another for minimum values
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
    return null;
};

MinStack.prototype.pop = function() {
    const popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
    return null;
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

module.exports = MinStack;