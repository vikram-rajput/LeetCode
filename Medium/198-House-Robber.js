/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let memo = {};
   return robFrom(0);
   function robFrom(idx) {
     if (idx >= nums.length) {
       return 0;
     }
     if (memo[idx] !== undefined) return memo[idx];
     let ans = Math.max(robFrom(idx + 1), robFrom(idx + 2) + nums[idx]);
     memo[idx] = ans;
     return ans;
   }   
 };