/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    if (connections.length < n - 1) return -1;
  let graph = {};
  for (var i = 0; i < n; i++) graph[i] = [];
  for (var [x, y] of connections) {
    graph[x].push(y);
    graph[y].push(x);
  }
  let seen = Array(n);
  let connected = 0;
  for (i = 0; i < n; i++) connected += dfs(i);
  return connected - 1;

  function dfs(node) {
    if (seen[node]) return 0;
    seen[node] = 1;
    for (var neighbor of graph[node]) {
      dfs(neighbor);
    }
    return 1;
  }
};