/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
     let paths = 0;
     let width = grid[0].length, length = grid.length;
     let start = [], valid = 0;
     for (var i = 0; i < length; i++) {
       for (var j = 0; j < width; j++) {
         if (grid[i][j] > -1) valid++;
         if (grid[i][j] === 1) start = [i, j];
       }
     }
     backtrack(start[0], start[1], valid);
     return paths;
     function backtrack(i, j, remain) {
       if (grid[i][j] === 2 && remain === 1) {
         paths++;
         return;
       }
       let cell = grid[i][j];
       grid[i][j] = -2;
       remain--;
       if (cell > -1) {
         for (var [x, y] of directions) {
           let newX = i + x;
           let newY = j + y;
           if (newX > -1 && newX < length && newY > -1 && newY < width && grid[newX][newY] > -1) {
             backtrack(newX, newY, remain);
           }
         }
       }
       grid[i][j] = cell;
       remain++;
     }  
   };