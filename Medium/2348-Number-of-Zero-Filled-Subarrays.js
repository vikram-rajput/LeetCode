/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let zeros = 0, ans = 0;
  for (let num of nums) {
    zeros = num === 0 ? zeros + 1 : 0;
    ans += zeros;
  }
  return ans;
};