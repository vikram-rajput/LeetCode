/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
 var numRollsToTarget = function(n, k, target) {
    let prev = Array(target + 1).fill(0), mod = 10**9 + 7;
  prev[0] = 1;
  
  for (let i = 1; i <= n; i++) {
    let curr = Array(target + 1).fill(0);
    for (let sum = 1; sum <= target; sum++) {
      for (let num = 1; num <= k; num++) {
        if (sum - num >= 0) curr[sum] = (curr[sum] + prev[sum - num]) % mod;
      }
    }
    prev = curr;
  }
  return prev[target];
};