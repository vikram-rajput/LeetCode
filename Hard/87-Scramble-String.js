/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    let n = s1.length, memo = Array(n).fill(0).map(() => Array(n).fill(0).map(() => Array(n + 1).fill(-1))); 
     return dp(0, 0, s1.length);
     
     function dp(i, j, len) {
       if (memo[i][j][len] !== -1) return memo[i][j][len];
       if (!hasSameChars(i, j, len)) return false;
       if (len === 1) return true;
       if (isSame(i, j, len)) return true;
       for (let k = 0; k < len - 1; k++) {
         let keepSame = dp(i, j, k + 1) && dp(i + k + 1, j + k + 1, len - k - 1);
         let swap = dp(i, j + len - k - 1, k + 1) && dp(i + k + 1, j, len - k - 1);
         if (keepSame || swap) {
           return memo[i][j][len] = true;
         }
       }
       return memo[i][j][len] = false;
     }
     
     function isSame(i, j, len) {
       for (let k = 0; k < len; k++) {
         if (s1[i + k] !== s2[j + k]) return false;
       }
       return true;
     }
     
     function hasSameChars(i, j, len) {
       let chars = Array(26).fill(0);
       for (let k = i; k < i + len; k++) {
         chars[s1.charCodeAt(k) - 97]++;
       }
       for (let k = j; k < j + len; k++) {
         chars[s2.charCodeAt(k) - 97]--;
       }
       for (let k = 0; k < 26; k++) {
         if (chars[k] !== 0) return false;
       }
       return true;
     }
   };