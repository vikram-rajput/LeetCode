/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let ones = 0, minFlips = 0;
    for (var char of s) {
      if (char === '1') ones++;
      else minFlips++;
      minFlips = Math.min(minFlips, ones);
    }
    return minFlips; 
};