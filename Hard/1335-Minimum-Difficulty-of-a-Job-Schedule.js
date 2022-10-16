/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
 var minDifficulty = function(jobDifficulty, d) {
    let n = jobDifficulty.length;
  let memo = Array(n).fill(0).map(() => Array(d + 1).fill(-1));
  let res = dfs(0, d);
  return res === Infinity ? -1 : res;
  
  function dfs(i, days) {
    if (days < 0 || n - i < days) return Infinity; // not enough days for jobs
    if (i === n) return days === 0 ? 0 : Infinity; // reached the end
    if (memo[i][days] !== -1) return memo[i][days]; 
    
    let ans = Infinity, max = 0;
    for (let idx = i; idx < n; idx++) {
      max = Math.max(max, jobDifficulty[idx]);
      ans = Math.min(ans, dfs(idx + 1, days - 1) + max);
    }
    return memo[i][days] = ans;
  }
};