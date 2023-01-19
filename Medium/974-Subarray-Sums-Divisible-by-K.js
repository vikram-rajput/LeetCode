/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let n = nums.length, pSum = Array(n);
 for (var i = 0; i < n; i++) {
   let prevSum = i === 0 ? 0 : pSum[i - 1];
   pSum[i] = prevSum + nums[i];
 }
 let sumFreq = {0: 1}, ans = 0;
 for (i = 0; i < n; i++) {
   let modK = pSum[i] % k; // get the mod of pSum[i]
   if (modK < 0) modK += k; // if less than 0, for e.g: -1, k = 5 -> it is equivalent to 4.
   if (sumFreq[modK]) ans += sumFreq[modK];
   sumFreq[modK] = (sumFreq[modK] || 0) + 1;
 }
 return ans;
};