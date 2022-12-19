/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let adjacencyList = {};
  for (var [a, b] of edges) {
    if (!adjacencyList[a]) adjacencyList[a] = [];
    if (!adjacencyList[b]) adjacencyList[b] = [];
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);
  }
  let stack = [source];
  let visited = {};
  visited[source] = true;
  while (stack.length) {
    let curr = stack.pop();
    if (curr === destination) return true;
    for (var neighbor of adjacencyList[curr]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    }
  }
  return false;
};