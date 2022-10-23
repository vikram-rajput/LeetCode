/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    let n = nums.length, duplicate, sum = 0, nSum = 0;
 for (let i = 0; i < n; i++) {
   let num = nums[i];
   let index = Math.abs(num) - 1;
   if (nums[index] < 0) duplicate = Math.abs(num);
   nums[index] = -nums[index];
   sum += Math.abs(num);
   nSum += i + 1;
 }
 let sumWithMissingNum = sum - duplicate;
 return [duplicate, nSum - sumWithMissingNum];
};