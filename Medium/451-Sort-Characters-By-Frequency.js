/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    let freq = {}, maxFreq = 0;
  for (var char of s) freq[char] = (freq[char] || 0) + 1;
  for (var key in freq) maxFreq = Math.max(maxFreq, freq[key]);
  let arr = Array(maxFreq + 1), ans = '';
  for (var key in freq) {
    if (!arr[freq[key]]) arr[freq[key]] = [];
    arr[freq[key]].push(key);
  }
  for (var i = maxFreq; i > 0; i--) {
    for (var char of (arr[i] || [])) ans += char.repeat(i);
  }
  return ans;
};