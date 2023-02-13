/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    let oddCount = Math.floor((high - low) / 2);
    if (low % 2 === 1 || high % 2 === 1) oddCount++;
    return oddCount;
};