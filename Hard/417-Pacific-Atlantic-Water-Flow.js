/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    let pacific = {}, atlantic = {};
 let res = [];
 const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
 let n = heights.length, m = heights[0].length;
 // n = rows, m = columns
 for (var j = 0; j < m; j++) dfs(0, j, pacific, atlantic);
 for (var i = 0; i < n; i++) dfs(i, 0, pacific, atlantic);

 for (i = 0; i < n; i++) dfs(i, m - 1, atlantic, pacific);
 for (j = 0; j < m; j++) dfs(n - 1, j, atlantic, pacific);

 return res;

 function dfs(row, col, set1, set2) {
   if (!set1[[row, col]]) {
     set1[[row, col]] = true;
     if (set2[[row, col]]) res.push([row, col]);
     for (var [x, y] of directions) {
     let newX = row + x, newY = col + y;
       if (newX > -1 && newX < n && newY > -1 && newY < m) {
         if (!set1[[newX, newY]] && heights[newX][newY] >= heights[row][col]) {
           dfs(newX, newY, set1, set2);
         }
       }
     }
   }
 }
};