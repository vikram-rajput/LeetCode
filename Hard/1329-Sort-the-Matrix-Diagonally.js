/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var diagonalSort = function(mat) {
    let m = mat.length, n = mat[0].length;
for (let i = 1; i < m; i++) sortDiag(i, 0); // left side except the top left corner
for (let j = 0; j < n; j++) sortDiag(0, j); // top row
return mat;

function sortDiag(startRow, startCol) {
  let nums = [];
  let row = startRow, col = startCol;
  while (row < m && col < n) {
    nums.push(mat[row][col]);
    row++, col++;
  }
  
  nums.sort((a, b) => a - b);
  
  row = startRow, col = startCol;
  let i = 0;
  while (row < m && col < n) {
    mat[row][col] = nums[i++];
    row++, col++;
  }
}
};