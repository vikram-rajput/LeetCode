/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let n = rooms.length, seen = Array(n).fill(0);
 dfs(0);
 return seen.reduce((acc, curr) => acc + curr, 0) === n;
 
 function dfs(node) {
   seen[node] = 1;
   for (let nei of rooms[node]) {
     if (seen[nei]) continue;
     dfs(nei);
   }
 }
};