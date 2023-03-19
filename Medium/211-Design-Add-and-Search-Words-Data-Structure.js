class TrieNode {
    constructor(char) {
      this.char = char;
      this.children = {};
      this.wordEnd = false;
    }
  }
  
  var WordDictionary = function() {
        this.root = new TrieNode(null);  
  };
  
  /** 
   * @param {string} word
   * @return {void}
   */
  WordDictionary.prototype.addWord = function(word) {
     let node = this.root;
    for (var char of word) {
      node = node.children;
      if (!node[char]) node[char] = new TrieNode(char);
      node = node[char];
    }
    node.wordEnd = true; 
  };
  
  /** 
   * @param {string} word
   * @return {boolean}
   */
  WordDictionary.prototype.search = function(word) {
     return dfs(this.root, 0);
    function dfs(node, idx) {
      if (idx === word.length) return node.wordEnd;
      if (word[idx] === '.') {
        for (var key in node.children) {
          if (dfs(node.children[key], idx + 1)) return true;
        }
      } else {
        if (!node.children[word[idx]]) return false;
        return dfs(node.children[word[idx]], idx + 1);
      }
      return false;
    } 
  };
  
  /** 
   * Your WordDictionary object will be instantiated and called as such:
   * var obj = new WordDictionary()
   * obj.addWord(word)
   * var param_2 = obj.search(word)
   */