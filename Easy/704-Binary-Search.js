/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(target == nums[mid]) {
            return mid;
        } else if(target < nums[mid] ) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};