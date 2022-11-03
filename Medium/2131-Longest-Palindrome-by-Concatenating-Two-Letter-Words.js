/**
 * @param {string[]} words
 * @return {number}
 */
 var longestPalindrome = function(words) {
    let wordCount = new Map();
 for (let word of words) {
   wordCount.set(word, (wordCount.get(word) || 0) + 1);
 }

 let length = 0, hasPalindromeMiddle = false;
 for (let [word, count] of wordCount) {
   if (word[0] === word[1]) {
     if (count % 2 === 1) hasPalindromeMiddle = true;
     length += (Math.floor(count / 2) * 4);
   } else {
     let flipped = word[1] + word[0], pairs = Math.min(count, (wordCount.get(flipped) || 0));
     length += (pairs * 4);
     wordCount.delete(word);
   }
 }
 return hasPalindromeMiddle ? length + 2 : length;
};