/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let n = matrix.length;
   for (var i = 0; i < n; i++) {
     for (var j = i; j < n; j++) {
       let temp = matrix[i][j];
       matrix[i][j] = matrix[j][i];
       matrix[j][i] = temp;
     }
     matrix[i] = matrix[i].reverse();
   }  
};