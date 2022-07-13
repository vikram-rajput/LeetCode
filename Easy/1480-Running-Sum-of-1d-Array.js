/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    sum = 0;
    ans = [];
    for(var i = 0; i< nums.length; i++){
        sum += nums[i];
        ans.push(sum);
        // nums[i] += nums[i -1];
    }
    return ans;
};


----- or -----
 
 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = [];
    sum[0] = nums[0];
    for(var i = 1; i< nums.length; i++){
        sum[i] = nums[i] + sum[i-1];
    }
    return sum;
};
