
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
 var shortestPath = function(grid, k) {
    let m = grid.length, n = grid[0].length;
  let seen = Array(m).fill(0).map(() => Array(n).fill(0).map(() => Array(k + 1).fill(0)));
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let queue = [[0, 0, k]], steps = 0;
  seen[0][0][k] = 1;
  while (queue.length) {
    for (let i = queue.length; i > 0; i--) {
      let [row, col, kLeft] = queue.shift();
      if (row === m - 1 && col === n - 1) return steps;
      for (let [x, y] of directions) {
        let newX = row + x, newY = col + y;
        if (newX < 0 || newX >= m || newY < 0 || newY >= n) continue; // out of bounds
        if (grid[newX][newY] === 1 && kLeft === 0) continue; // we don't have any k left to eliminate the obstacle
        let newK = grid[newX][newY] === 1 ? kLeft - 1 : kLeft;
        if (seen[newX][newY][newK]) continue; // already been to that state
        seen[newX][newY][newK] = 1;
        queue.push([newX, newY, newK]);
      }
    }
    steps++;
  }
  return -1;
};