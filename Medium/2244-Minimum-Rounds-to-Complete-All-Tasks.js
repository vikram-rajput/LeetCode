/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let freq = {};
  for (let task of tasks) {
    freq[task] = (freq[task] || 0) + 1;
  }
  
  let ans = 0;
  for (let key in freq) {
    if (freq[key] === 1) return -1;
    ans += Math.ceil(freq[key] / 3);
  }
  return ans;
};