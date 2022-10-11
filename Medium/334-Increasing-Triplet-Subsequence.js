/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {
    if (nums.length < 3) return false;
 let n = nums.length, maxRight = Array(n).fill(-Infinity); // maxRight[i] = maximum number on the right with index >= i
 maxRight[n - 1] = nums[n - 1];
 for (let k = n - 2; k >= 0; k--) {
   maxRight[k] = Math.max(maxRight[k + 1], nums[k]);
 }
 let minLeft = nums[0];
 for (let j = 1; j < n - 1; j++) {
   if (minLeft < nums[j] && nums[j] < maxRight[j + 1]) return true;
   minLeft = Math.min(minLeft, nums[j]);
 }
 return false;
};