/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    let graph = {};
  for (var i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (var [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  let count = Array(n).fill(0), res = Array(n).fill(0);
  dfs(0, -1);
  dfs2(0, -1);
  function dfs(root, parent) {
    for (var i of graph[root]) {
      if (i === parent) continue;
      dfs(i, root);
      count[root] += count[i];
      res[root] += res[i] + count[i];
    }
    count[root]++;
  }
  function dfs2(root, parent) {
    for (var i of graph[root]) {
      if (i === parent) continue;
      res[i] = res[root] - count[i] + n - count[i];
      dfs2(i, root);
    }
  }
  return res;
};