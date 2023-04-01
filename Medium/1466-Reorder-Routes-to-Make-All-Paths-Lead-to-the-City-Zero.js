/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let graph = Array(n).fill(0).map(() => []);
     for (let [a, b] of connections) {
       graph[a].push([b, 1]);
       graph[b].push([a, -1]); // reverse edge
     }
     
     let seen = Array(n).fill(0), ans = 0;
     dfs(0);
     return ans;
     
     function dfs(node) {
       seen[node] = 1;
       for (let [nei, weight] of graph[node]) {
         if (seen[nei]) continue;
         if (weight > 0) ans++;
         dfs(nei);
       }
     }
   };