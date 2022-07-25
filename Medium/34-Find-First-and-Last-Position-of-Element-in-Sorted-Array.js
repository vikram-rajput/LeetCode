/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let i = 0, j = nums.length - 1, mid;
    let leftIndex = -1, rightIndex = -1;

    while(i <= j){
        mid = ~~(i + (j - i) / 2);

        if(nums[mid] > target){
            j = mid - 1;
        } else if (nums[mid] < target){
            i = mid + 1;
        } else {
            leftIndex = mid;
            j = mid - 1;
        }
    }

    i = 0;
    j = nums.length - 1;

    while(i <= j){
        mid = ~~(i + (j - i) / 2);

        if(nums[mid] > target){
            j = mid - 1;
        } else if (nums[mid] < target){
            i = mid + 1;
        } else {
            rightIndex = mid;
            i = mid + 1;
        }
    }

    return [leftIndex, rightIndex];
};