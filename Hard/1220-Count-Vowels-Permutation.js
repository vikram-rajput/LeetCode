/**
 * @param {number} n
 * @return {number}
 */
 var countVowelPermutation = function(n) {
    let prevA = 1, prevE = 1, prevI = 1, prevO = 1, prevU = 1;
 let mod = 10 ** 9 + 7;
 for (let i = 1; i < n; i++) {
   let currA = 0, currE = 0, currI = 0, currO = 0, currU = 0;
   currE = prevA; // a -> e
   currA = (prevE + prevU) % mod; // e -> a, u -> a
   currI = (prevE + prevO) % mod; // e -> i, o -> i
   currU = prevO; // o -> u
   
   // i -> any vowel except i
   currA = (currA + prevI) % mod; 
   currE = (currE + prevI) % mod;
   currO = (currO + prevI) % mod;
   currU = (currU + prevI) % mod;
   
   prevA = currA;
   prevE = currE;
   prevI = currI;
   prevO = currO;
   prevU = currU;
 }
 return (prevA + prevE + prevI + prevO + prevU) % mod;
};