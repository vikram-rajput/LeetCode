/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var checkSubarraySum = function(nums, k) {
    let map = new Map(), n = nums.length, sum = 0;
  map.set(0, -1);
  for (let i = 0; i < n; i++) {
    sum = (sum + nums[i]) % k;
    if (map.has(sum)) {
      let prevIndex = map.get(sum);
      if (i - prevIndex >= 2) return true;
    } else {
      map.set(sum, i);
    }
  }
  return false;
};