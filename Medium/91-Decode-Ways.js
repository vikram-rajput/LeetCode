/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    let n = s.length, memo = Array(n).fill(-1);
  return dp(0);
  
  function dp(i) {
    if (i === n) return 1;
    if (s[i] === '0') return 0;
    if (memo[i] !== -1) return memo[i];
    
    let ways = dp(i + 1); // take one digit
    if (i < n - 1 && Number(s.slice(i, i + 2)) <= 26) { // take two digits
      ways += dp(i + 2);
    }
    return memo[i] = ways;
  }  
};