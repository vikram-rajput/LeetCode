/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
 var maximumScore = function(nums, multipliers) {
    let n = nums.length, m = multipliers.length;
 let memo = new Map();
 return dp(0, n - 1);
 
 function dp(left, right) {
   let index = left + n - right - 1;
   if (index === m) return 0;
   let key = `${left},${right}`;
   if (memo.has(key)) return memo.get(key);
   
   let leftScore = nums[left] * multipliers[index];
   let rightScore = nums[right] * multipliers[index];
   let ans = Math.max(dp(left + 1, right) + leftScore, dp(left, right - 1) + rightScore);
   memo.set(key, ans);
   return ans;
      }
};
   