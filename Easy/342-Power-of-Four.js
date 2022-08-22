/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
    if(n <= 0) return false;
     else if(n === 1) return true;
     return (n & (n-1)) === 0 && (n % 10 === 4 || n % 10 === 6);
 };