/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    sum = 0;
    for( var i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    leftSum=0;
    rightSum =  sum;
    for(var i = 0; i < nums.length; i++){
        rightSum = rightSum - nums[i];
        if(leftSum == rightSum){
            return i;   
        }
        leftSum += nums[i];
    }
    return -1
};