/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n === 1){return true}
    if(n < 3){return false}
    return ( n / 3 === 1 || isPowerOfThree(n/3))
};