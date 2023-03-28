/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let lastDay = days[days.length - 1];
  let daySet = new Set(days);
  let dp = Array(lastDay + 1).fill(Infinity);
  dp[0] = 0;
  for (var i = 1; i <= lastDay; i++) {
    if (!daySet.has(i)) {
      dp[i] = dp[i - 1];
    }
    dp[i] = Math.min(
     dp[i],
     dp[i - 1] + costs[0],
     (dp[i - 7] || 0) + costs[1],
     (dp[i - 30] || 0) + costs[2]
    );
  }
  return dp[lastDay];
};