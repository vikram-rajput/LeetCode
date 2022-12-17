/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
  for (var i = 0; i < tokens.length; i++) {
    if (!isNaN(tokens[i])) {
      stack.push(+tokens[i]);
    } else {
      let num2 = stack.pop(), num1 = stack.pop();
      switch (tokens[i]) {
        case '+': stack.push(num1 + num2); break;
        case '-': stack.push(num1 - num2); break;
        case '*': stack.push(num1 * num2); break;
        case '/': stack.push(Math.trunc(num1 / num2)); break;
      }
    }
  }
  return stack[0];
};