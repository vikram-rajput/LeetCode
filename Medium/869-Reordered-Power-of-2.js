/**
 * @param {number} n
 * @return {boolean}
 */
 var reorderedPowerOf2 = function(n) {
    let count = getDigitCounts(n), pow = 1;
  for (let i = 0; i < 32; i++) {
    let powCount = getDigitCounts(pow);
    let isMatch = true;
    for (let i = 0; i < 10; i++) {
      if (count[i] !== powCount[i]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) return true;
    pow *= 2;
  }
  return false;
  
  function getDigitCounts(num) {
    let count = Array(10).fill(0);
    if (num === 0) count[0]++;
    while (num > 0) {
      count[num % 10]++;
      num = Math.floor(num / 10);
    }
    return count;
  }
};