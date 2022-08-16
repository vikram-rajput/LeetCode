/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    if (s.length === 0) return -1;
  
      for( let i = 0; i < s.length; i++) {
         const letter = s[i]
  
         if(s.indexOf(letter) === s.lastIndexOf(letter)) return i
     }
  
     return -1  
  };