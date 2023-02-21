/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let rightLenEven = (right - mid) % 2 === 0;
    if (nums[mid - 1] === nums[mid]) {
      if (rightLenEven) right = mid - 2;
      else left = mid + 1;
    } else if (nums[mid + 1] === nums[mid]) {
      if (rightLenEven) left = mid + 2;
      else right = mid - 1;
    } else {
      return nums[mid];
    }
  }  
  return nums[left];
};