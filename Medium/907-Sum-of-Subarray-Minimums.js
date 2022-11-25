/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumSubarrayMins = function(arr) {
    let stack = [-1], n = arr.length;
    let mod = 10 ** 9 + 7;
    let left = Array(n), right = Array(n);
    for (var i = 0; i < n; i++) {
      while (stack[stack.length - 1] !== -1 && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }
      left[i] = i - stack[stack.length - 1];
      stack.push(i);
    }
    stack = [n];
    let ans = 0;
    for (i = n - 1; i >= 0; i--) {
      while (stack[stack.length - 1] !== n && arr[stack[stack.length - 1]] > arr[i]) {
        stack.pop();
      }
      right[i] = stack[stack.length - 1] - i;
      ans += arr[i] * left[i] * right[i];
      stack.push(i);
    }
    return ans % mod;  
  };