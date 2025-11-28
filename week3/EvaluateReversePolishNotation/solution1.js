/**
 * Alternative solution using Set for operator checking
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const operators = new Set(['+', '-', '*', '/']);
    
    for (const token of tokens) {
        if (operators.has(token)) {
            const b = stack.pop();
            const a = stack.pop();
            
            const operations = {
                '+': (a, b) => a + b,
                '-': (a, b) => a - b,
                '*': (a, b) => a * b,
                '/': (a, b) => Math.trunc(a / b)
            };
            
            stack.push(operations[token](a, b));
        } else {
            stack.push(parseInt(token));
        }
    }
    
    return stack[0];
};

module.exports = evalRPN;