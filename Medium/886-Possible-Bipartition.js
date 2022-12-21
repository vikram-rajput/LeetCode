/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    let map = Array(n + 1).fill(-1);
    let graph = {};
    for (let i = 1; i <= n; i++) graph[i] = [];
    for (let [x, y] of dislikes) {
      graph[x].push(y);
      graph[y].push(x);
    }
    for (let i = 1; i <= n; i++) {
      if (map[i] > -1) continue;
      map[i] = 0;
      if (!dfs(i)) return false;
    }
    return true;
    
    function dfs(node) {
      let group = map[node];
      for (let nei of graph[node]) {
        if (map[nei] === -1) {
          map[nei] = group ^ 1; // 1 to 0, 0 to 1.
          dfs(nei);
        } else if (map[nei] === group) {
          return false;
        }
      }
      return true;
    }  
  };