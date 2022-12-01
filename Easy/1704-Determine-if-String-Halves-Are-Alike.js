/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    let n = s.length, mid = s.length / 2;
 let vowelsA = 0;
 for (let i = 0; i < mid; i++) {
   vowelsA += isVowel(s[i]) ? 1 : 0;
 }
 let vowelsB = 0;
 for (let i = mid; i < n; i++) {
   vowelsB += isVowel(s[i]) ? 1 : 0;
 }
 return vowelsA === vowelsB;
};

function isVowel(char) {
 return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char);
}