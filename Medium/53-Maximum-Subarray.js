/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    var maxSum = nums[0];
    var currSum = nums[0];
    
    for(let i = 1 ; i < nums.length; i++){
        currSum = Math.max(currSum + nums[i], nums[i]);
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
};