/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // Create table
    const dp = new Array(grid.length).fill(0).map(() => Array(grid[0].length).fill(Infinity));
    // Add starting value
    dp[0][0] = grid[0][0]
    // Populate table
    for (let i = 0; i < dp.length; i++) {
        for(let j = 0; j < dp[0].length; j++) {
            // Add current cell total to cells to the right and below if the current cell + grid value of cell right/below is less than that cell's current total
            if(i+1 < dp.length) dp[i+1][j] = Math.min(dp[i+1][j], dp[i][j]+grid[i+1][j])
            if(j+1 < dp[0].length) dp[i][j+1] = Math.min(dp[i][j+1], dp[i][j]+grid[i][j+1])
        }
    }
    return dp[dp.length-1][dp[0].length-1]
};