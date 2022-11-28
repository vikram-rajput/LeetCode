/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
 var jobScheduling = function(startTime, endTime, profit) {
    let jobs = [], n = startTime.length;
  for (let i = 0; i < n; i++) {
    jobs.push([startTime[i], endTime[i], profit[i]]);
  }
  jobs.sort((a, b) => a[0] - b[0]);
  let dp = Array(n).fill(0), max = 0;
  for (let i = n - 1; i >= 0; i--) {
    let [start, end, prof] = jobs[i];
    let next = findNext(end);
    let nextJob = next === -1 ? 0 : dp[next];
    let adj = i === n - 1 ? 0 : dp[i + 1];
    dp[i] = Math.max(nextJob + prof, adj);
    max = Math.max(max, dp[i]);
  }
  return max;
  
  function findNext(end) { // finds the first job with a start time bigger than or equal to end
    let low = 0, high = n - 1;
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (jobs[mid][0] >= end) high = mid;
      else low = mid + 1;
    }
    if (jobs[low][0] >= end) return low;
    return -1;
  }
};