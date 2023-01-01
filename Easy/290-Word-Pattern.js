/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map = new Map(), keys = new Set(), n = pattern.length;
   s = s.split(" ");
   if (pattern.length !== s.length) return false;
   for (var i = 0; i < n; i++) {
     let [key, word] = [pattern[i], s[i]];
     if (!map.has(word)) { // new word
       if (keys.has(key)) return false; // if the key is already mapped to another word, return false.
       keys.add(key);
       map.set(word, key);
     } else if (map.get(word) !== key) return false; // if the word is mapped to a different key already, return false.
   }
   return true; 
 };