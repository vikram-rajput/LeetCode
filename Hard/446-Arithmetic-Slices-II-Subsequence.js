/**
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function(nums) {
    let n = nums.length;
 let dp = Array(n);
 for(let i = 0; i < n; i++) {
   dp[i] = {};
 }
 let ans = 0;
 for (var i = 1; i < n; i++) {
   for (var j = 0; j < i; j++) {
     let diff = nums[i] - nums[j];
     if (diff < -(2 ** 31) || diff > 2 ** 31 - 1) continue;
     let sum = dp[j][diff] || 0;
     let curr = dp[i][diff] || 0;
     dp[i][diff] = curr + sum + 1;
     ans += sum;
   }
 }
 return ans;
};