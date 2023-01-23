/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let indegrees = Array(n + 1).fill(0), outdegrees = Array(n + 1).fill(0);
  for (var [x, y] of trust) {
    outdegrees[x]++;
    indegrees[y]++;
  }
  for (var i = 1; i <= n; i++) {
    if (indegrees[i] === n - 1 && outdegrees[i] === 0) return i;
  }
  return -1;
};