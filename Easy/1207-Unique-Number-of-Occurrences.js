/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    let freq = {};
  for (var num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  let freqFreq = Array(arr.length + 1).fill(0);
  for (var num in freq) {
    if (freqFreq[freq[num]] > 0) return false;
    freqFreq[freq[num]]++;
  }
  return true;
};