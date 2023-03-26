/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
    let n = edges.length, seen = Array(n).fill(0), res = -1;
  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      res = Math.max(res, dfs(i));
    }
  }
  return res;
  
  function dfs(node) {
    let dist = new Map(); // dist[i] = distance from node to i
    let steps = 0;
    while (node !== -1) {
      if (dist.has(node)) {
        return steps - dist.get(node);
      }
      if (seen[node]) return -1;
      seen[node] = 1;
      dist.set(node, steps);
      steps++;
      node = edges[node];
    }
    return -1;
  }
};