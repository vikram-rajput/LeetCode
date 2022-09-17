/**
 * @param {string[]} words
 * @return {number[][]}
 */
 var palindromePairs = function(words) {
    let trie = new Trie();
    for (var i = 0; i < words.length; i++) trie.addWord(words[i], i);
    // [match idx, i]
    let res = [];
    for (i = 0; i < words.length; i++) {
      let matches = trie.matches(words[i]);
      for (var idx of matches) {
        if (idx === i) continue;
        res.push([idx, i]);
      }
    }
    return res;
  };
  
  class TrieNode {
    constructor() {
      this.children = {};
      this.isWordEnd = false;
      this.idx = null;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
    addWord(word, idx) {
      let node = this.root;
      for (var char of word) {
        node = node.children;
        if (!node[char]) node[char] = new TrieNode();
        node = node[char];
      }
      node.isWordEnd = true;
      node.idx = idx;
    }
    matches(word) {
      let node = this.root, res = [];
      for (var i = word.length - 1; i >= 0; i--) {
        if (node.isWordEnd) { // length of word is longer
          if (isPalindrome(word.slice(0, i + 1))) res.push(node.idx);
        }
        let char = word[i];
        node = node.children;
        if (!node[char]) break;
        node = node[char];
      }
      // word is shorter or equal in length...
      getWords(node, "");
      return res;
      
      function getWords(node, word) {
        if (node.isWordEnd) {
          if (isPalindrome(word)) res.push(node.idx);
        }
        for (var key in node.children) {
          getWords(node.children[key], word + key);
        }
      }
    }
  }
  
  function isPalindrome(word) {
    let start = 0, end = word.length - 1;
    while (start < end) {
      if (word[start] !== word[end]) return false;
      start++, end--;
    }
    return true;
  }