/**
 * Recursive solution approach
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    
    const isOperator = (token) => ['+', '-', '*', '/'].includes(token);
    
    const calculate = (a, b, operator) => {
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return Math.trunc(a / b);
        }
    };
    
    tokens.forEach(token => {
        if (isOperator(token)) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(calculate(a, b, token));
        } else {
            stack.push(Number(token));
        }
    });
    
    return stack[0];
};

module.exports = evalRPN;