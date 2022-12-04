/**
 * @param {number[]} nums
 * @return {number}
 */
 var minimumAverageDifference = function(nums) {
    let n = nums.length, minDiff = Infinity, ans = Infinity;
  let left = 0, right = nums.reduce((sum, num) => sum + num);
  for (let i = 0; i < n; i++) {
    left += nums[i];
    right -= nums[i];
    let leftAvg = Math.floor(left / (i + 1));
    let rightAvg = i === n - 1 ? 0 : Math.floor(right / (n - i - 1));
    let diff = Math.abs(leftAvg - rightAvg);
    if (diff <= minDiff) {
      ans = diff === minDiff ? Math.min(ans, i) : i;
      minDiff = diff;
    }
  }
  return ans;
};