/**
 * @param {number[][]} grid
 * @return {number[]}
 */
 var findBall = function(grid) {
    let m = grid.length, n = grid[0].length;
  let res = Array(n);
  for (let j = 0; j < n; j++) {
    let col = j;
    for (let i = 0; i < m; i++) {
      let newCol = col + grid[i][col];
      if (newCol < 0 || newCol >= n || grid[i][col] !== grid[i][newCol]) {
        col = -1;
        break;
      }
      col = newCol;
    }
    res[j] = col;
  }
  return res;
};