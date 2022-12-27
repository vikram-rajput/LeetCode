/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let diffs = [], ans = 0;
 for (let i = 0; i < capacity.length; i++) {
   let remain = capacity[i] - rocks[i];
   if (remain === 0) ans++;
   else diffs.push(remain);
 }
 diffs.sort((a, b) => a - b);

 for (let i = 0; i < diffs.length; i++) {
   if (diffs[i] > additionalRocks) break;
   additionalRocks -= diffs[i];
   ans++;
 }
 return ans;
};