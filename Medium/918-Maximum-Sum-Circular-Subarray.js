/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let currMinSum = nums[0], currMaxSum = nums[0];
 let minSum = nums[0], maxSum = nums[0], totalSum = nums[0];
 for (let i = 1; i < nums.length; i++) {
   currMinSum = Math.min(currMinSum + nums[i], nums[i]);
   currMaxSum = Math.max(currMaxSum + nums[i], nums[i]);
   minSum = Math.min(minSum, currMinSum);
   maxSum = Math.max(maxSum, currMaxSum);
   totalSum += nums[i];
 }  
 return maxSum <= 0 ? maxSum : Math.max(maxSum, totalSum - minSum);
};