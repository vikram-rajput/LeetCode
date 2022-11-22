/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    // placeholder 0 to bump up indexes by 1
 let squares = [0];
 // pre-compute the squares
 for (var i = 1; i * i <= n; i++) {
   squares.push(i * i);
 } 
 let dp = Array(n + 1).fill(Infinity);
 dp[0] = 0;
 for (var i = 1; i <= n; i++) {
   for (var j = 1; j < squares.length; j++) {
     if (i < squares[j]) break;
     dp[i] = Math.min(dp[i], dp[i - squares[j]] + 1);
   }
 } 
 return dp[n];
};