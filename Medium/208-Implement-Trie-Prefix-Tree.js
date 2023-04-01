var Trie = function() {
    this.root = {};  
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
   let curr = this.root;
 for (var i = 0; i < word.length; i++) {
   if (!curr[word[i]]) {
     curr[word[i]] = {};
   }
   curr = curr[word[i]];
 }  
 curr.isWord = true;
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
   let curr = this.root;
 for (var i = 0; i < word.length; i++) {
   if (!curr[word[i]]) return false;
   curr = curr[word[i]];
  }  
  if (curr.isWord) return true;
  return false;
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
   let curr = this.root;
 for (var i = 0; i < prefix.length; i++) {
   if (!curr[prefix[i]]) return false;
   curr = curr[prefix[i]];
 }  
 return true;
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/