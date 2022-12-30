/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let n = graph.length;
  let paths = [];
  dfs(0, []);
  function dfs(node, path) {
    path.push(node);
    if (node === n - 1) {
      paths.push([...path]);
      return;
    }
    for (var neighbor of graph[node]) {
      dfs(neighbor, path);
      path.pop();
    }
  }
  return paths;
};