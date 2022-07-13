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