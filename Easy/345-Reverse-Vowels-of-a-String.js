/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    let chars = s.split(""), n = s.length;  
     let i = 0, j = n - 1;
     while (i < j) {
       while (i < n && !isVowel(chars[i])) i++; // find next vowel
       while (j >= 0 && !isVowel(chars[j])) j--; // find next vowel
       if (i >= j) break;
       [chars[i], chars[j]] = [chars[j], chars[i]];
       i++, j--;
     }
     return chars.join("");
   };
   
   function isVowel(char) {
     let vowels = new Set(['a','e','i','o','u']);
     return vowels.has(char.toLowerCase());
   }