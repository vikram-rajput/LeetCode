/**
 * @param {number[]} changed
 * @return {number[]}
 */
 var findOriginalArray = function(changed) {
    if (changed.length % 2 === 1) return [];
  
  changed.sort((a, b) => a - b);
  let freq = new Map();
  for (let num of changed) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  
  let res = [];
  for (let num of changed) {
    if (freq.get(num) === 0) continue; // number is already used up
    freq.set(num, freq.get(num) - 1); // decrease num frequency
    if (!freq.has(num * 2) || freq.get(num * 2) === 0) return []; // there is no double, invalid.
    freq.set(num * 2, freq.get(num * 2) - 1); // decrease double frequency
    res.push(num); 
  }
  return res;
};