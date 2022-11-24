/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const length = board.length, width = board[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < width; j++) {
        if (board[i][j] === word[0]) {
          if (backtrack(i, j, 0)) return true;
        }
      }
    }
    return false;
    function backtrack(i, j, k) {
      if (i < 0 || i >= length || j < 0 || j >= width || board[i][j] !== word[k]) return;
      if (k === word.length - 1) return true;
      board[i][j] = '.';
      for (var l = 0; l < directions.length; l++) {
        if (backtrack(i + directions[l][0], j + directions[l][1], k + 1)) return true;
      }
      board[i][j] = word[k];
      return false;
    }
};