/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
 let count1 = Array(26).fill(0), count2 = Array(26).fill(0);
 for (let i = 0; i < word1.length; i++) {
   count1[word1.charCodeAt(i) - 97]++;
   count2[word2.charCodeAt(i) - 97]++;
 }
 
 let freq1 = [], freq2 = [];
 for (let i = 0; i < 26; i++) {
   if (count1[i] > 0 && count2[i] > 0) {
     freq1.push(count1[i]);
     freq2.push(count2[i]);
   } else if (count1[i] > 0 || count2[i] > 0) { // has different characters
     return false;
   }
 }
 freq1.sort((a, b) => a - b), freq2.sort((a, b) => a - b);
 for (let i = 0; i < freq1.length; i++) {
   if (freq1[i] !== freq2[i]) return false; // different frequencies
 }
 return true;
};