/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
 var sumEvenAfterQueries = function(nums, queries) {
    let evenSum = nums.reduce((sum, num) => {
   return num % 2 === 0 ? sum + num : sum;
 }, 0);
 
 let answer = Array(queries.length);
 queries.forEach(([val, index], i) => {
   let prevVal = nums[index], newVal = nums[index] + val;
   nums[index] += val;
   if (prevVal % 2 === 0) {
     if (newVal % 2 === 0) evenSum += val;
     else evenSum -= prevVal;
   } else if (newVal % 2 === 0) {
     evenSum += newVal;
   }
   answer[i] = evenSum;
 });
 return answer;
};