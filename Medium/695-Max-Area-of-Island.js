/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    // calculate grid row and coulumn length
    var row = grid.length;
    var col = grid[0].length;
    // assume default max and count for initial values
    let max=0;
    let count=0;
    // loop through grid
    for(let i= 0; i< row; i++){
        for(let j = 0; j < col; j++){
            findMaxIsland(i,j);
            max = Math.max(max, count);
            count = 0;
        }
    }
 return max

function findMaxIsland(i,j){
    if(i < 0 || i>=row || j<0 || j>=col || grid[i][j] === 0){
        return;
    }
    
    count++;
    //update visited value as 0 to avoid recurrsion
    grid[i][j]=0;
  
    
    findMaxIsland(i+1,j); // check right cell
    findMaxIsland(i-1,j); // check left cell
    findMaxIsland(i,j+1); // check top cell
    findMaxIsland(i,j-1); // check bottom cell
}
    
        
};