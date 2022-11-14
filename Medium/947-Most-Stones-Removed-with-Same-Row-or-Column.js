/**
 * @param {number[][]} stones
 * @return {number}
 */
 var removeStones = function(stones) {
    let n = stones.length, rowGraph = {}, colGraph = {};
  for (let i = 0; i < n; i++) {
    let [x, y] = stones[i];
    if (!rowGraph[x]) rowGraph[x] = [];
    if (!colGraph[y]) colGraph[y] = [];
    rowGraph[x].push(i);
    colGraph[y].push(i);
  }
  let seen = Array(n).fill(0), count = 0;
  for (let i = 0; i < n; i++) {
    let res = dfs(i);
    count += res;
  }
  return n - count;
  
  function dfs(idx) {
    if (seen[idx]) return 0;
    let [row, col] = stones[idx];
    seen[idx] = 1;
    for (let nei of rowGraph[row]) dfs(nei);
    for (let nei of colGraph[col]) dfs(nei);
    return 1;
  }
};