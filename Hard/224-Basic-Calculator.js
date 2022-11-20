/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    let signs = [], stack = [];
    let sign = 1, number = 0;
    for (var i = 0; i < s.length; i++) {
      if (s[i] >= '0') {
        number = +s[i];
        while (i < s.length - 1 && s[i + 1] >= '0') {
          i++;
          number = number * 10 + +s[i];
        }
        stack.push(number);
        signs.push(sign);
      } else if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '+' ? 1 : -1;
      } else if (s[i] === '(') {
        stack.push('(');
        signs.push(sign);
        sign = 1;
      } else if (s[i] === ')') {
        let tempSum = 0;
        while (stack[stack.length - 1] !== '(') {
          let temp = stack.pop();
          let tempSign = signs.pop();
          tempSum += temp * tempSign;
        }
        stack.pop();
        stack.push(tempSum * signs.pop()), signs.push(1);
      }
    }  
    let ans = 0;
    for (var j = 0; j < stack.length; j++) {
      ans += stack[j] * signs[j];
    }
    return ans;
};