/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length, m = text2.length;
    let memo = Array(n);
    for (var i = 0; i < n; i++) {
      memo[i] = Array(m);
    }
    return recurse(0, 0);
    function recurse(i, j) {
      if (i === text1.length || j === text2.length) return 0;
      if (memo[i][j]) return memo[i][j];
      let ans = 0;
      if (text1[i] === text2[j]) {
        ans = 1 + recurse(i + 1, j + 1);
      } else {
        ans = Math.max(ans, recurse(i + 1, j), recurse(i, j + 1));
      }
      memo[i][j] = ans;
      return ans;
    }    
  };