/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let len = matrix.length, i = 0, j = matrix[0].length - 1
    while (i < len && ~j) { 
        if (matrix[i][j] === target) return true
        else if (matrix[i][j] > target) j--
        else i++
    }
    return false;
};