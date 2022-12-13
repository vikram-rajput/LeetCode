
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let n = matrix.length;
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      let paths = [[i + 1, j - 1], [i + 1, j], [i + 1, j + 1]];
      let min = Infinity;
      for (let [x, y] of paths) {
        if (y < 0 || y >= n) continue;
        min = Math.min(min, matrix[x][y]);
      }
      matrix[i][j] += min;
    }
  }
  return Math.min(...matrix[0]);
};