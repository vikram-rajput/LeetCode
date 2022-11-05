/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 class TrieNode {
    constructor(char) {
      this.char = char;
      this.children = {};
      this.word = null;
    }
  }
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
    insert(word) {
      let curr = this.root;
      for (var i = 0; i < word.length; i++) {
        curr = curr.children;
        if (!curr[word[i]]) curr[word[i]] = new TrieNode(word[i]);
        curr = curr[word[i]];
      }
      // instead of marking wordEnd as true, store the entire word instead for easy access
      curr.word = word;
    }
  }
  
  var findWords = function(board, words) {
    let trie = new Trie();
    for (var word of words) trie.insert(word);
    let res = [];
    // call backtrack for each cell in board
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[0].length; j++) {
        backtrack(i, j, trie.root);
      }
    }
    return res;
  
    function backtrack(row, col, currNode) {
      const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
      // if we find a word, push it into res and set it to null (we only want to match it once)
      if (currNode.word) {
        res.push(currNode.word);
        currNode.word = null;
      } 
      currNode = currNode.children;
      
      if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || !currNode[board[row][col]]) return;
  
      let letter = board[row][col];
      // mark cell as visited
      board[row][col] = '.';
  
      // try all four directions
      for (var [x, y] of directions) {
        let newX = row + x, newY = col + y;
        backtrack(newX, newY, currNode[letter]);
      }
      // unmark cell 
      board[row][col] = letter;
    }
  };
  