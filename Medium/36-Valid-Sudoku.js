/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let length = board.length;
    for (var i = 0; i < length; i++) {
      let rows = new Array(length);
      let cols = new Array(length);
      let boxes = new Array(length);
      for (var j = 0; j < length; j++) {
        let row = +board[i][j];
        let col = +board[j][i];
        let box = +board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
        if (row) {
          if (rows[row]) return false;
          rows[row] = 1;
        }
        if (col) {
          if (cols[col]) return false;
          cols[col] = 1;
        }
        if (box) {
          if (boxes[box]) return false; 
          boxes[box] = 1;
        }
      }
    }
    return true;
};