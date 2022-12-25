/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b);
   queries = queries.map((query, idx) => [query, idx]).sort((a, b) => a[0] - b[0]);
   let n = nums.length, m = queries.length;
   let res = Array(m).fill(0);
   let sum = 0;
   for (let j = 0, i = 0; j < m; j++) {
     let [maxSum, index] = queries[j];
     while (i < n && sum + nums[i] <= maxSum) {
       sum += nums[i++];
     }
     res[index] = i;
   }
   return res;  
 };