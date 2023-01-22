/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [];
  backtrack(0, []);
  return res;

  function backtrack(idx, arr) {
    if (idx === s.length) {
      res.push([...arr]);
      return;
    }
    for (var i = idx; i < s.length; i++) {
      if (isPalindrome(idx, i)) {
        arr.push(s.slice(idx, i + 1));
        backtrack(i + 1, arr);
        arr.pop();
      }
    }
  }
  function isPalindrome(start, end) {
    while (start < end) {
      if (s[start] === s[end]) start++, end--;
      else return false;
    }
    return true;
  }
};