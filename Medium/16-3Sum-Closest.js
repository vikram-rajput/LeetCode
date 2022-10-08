/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    let diff = Infinity;
    nums = nums.sort((a, b) => a - b);
    for (var i = 0; i < nums.length; i++) {
      let l = i + 1, r = nums.length - 1;
      while (l < r) {
        let sum = nums[i] + nums[l] + nums[r];
        if (Math.abs(target - sum) < Math.abs(diff)) diff = target - sum;
        if (sum == target) break;
        if (sum < target) l++;
        else r--;
      }
    }
    return target - diff;
};