/**
 * Solution 2: Single Stack with Pairs
 * Store [value, currentMin] pairs in a single stack
 */
var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(val) {
    const currentMin = this.stack.length === 0 ? val : Math.min(val, this.getMin());
    this.stack.push([val, currentMin]);
    return null;
};

MinStack.prototype.pop = function() {
    this.stack.pop();
    return null;
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0];
};

MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1];
};

module.exports = MinStack;