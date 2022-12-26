/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = -Infinity, n = nums.length;
 for (var i = 0; i < n; i++) {
   max = Math.max(max - 1, nums[i]);
   if (max < 1 && i !== n - 1) return false;
 }  
 return true;
};