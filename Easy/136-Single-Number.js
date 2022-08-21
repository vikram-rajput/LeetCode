/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let ans = 0;
    for(num of nums){
        ans = ans ^ num;
    }
    return ans;
};