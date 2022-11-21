/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
 var nearestExit = function(maze, entrance) {
    let m = maze.length, n = maze[0].length;
  let seen = Array(m).fill(0).map(() => Array(n).fill(0));
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let queue = [entrance], steps = 0;
  seen[entrance[0]][entrance[1]] = 1;
  
  while (queue.length) {
    for (let i = queue.length; i > 0; i--) {
      let [row, col] = queue.shift();
      if (isExit(row, col)) return steps;
      for (let [x, y] of directions) {
        let newX = row + x, newY = col + y;
        if (newX < 0 || newX >= m || newY < 0 || newY >= n) continue; // out of bounds
        if (maze[newX][newY] === '+' || seen[newX][newY]) continue; // wall or already visited
        queue.push([newX, newY]);
        seen[newX][newY] = 1;
      }
    }  
    steps++;
  }
  return -1;
    
  function isExit(row, col) {
    if (row === entrance[0] && col === entrance[1]) return false; // entrance is not an exit
    return (row === 0 || row === m - 1 || col === 0 || col === n - 1) && maze[row][col] === '.';
  }
};