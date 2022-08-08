/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let seq = [nums[0]];
    for (var i = 1; i < nums.length; i++) {
        if (seq[seq.length - 1] < nums[i]) seq.push(nums[i]);
        else {
            let idx = binarySearch(nums[i]);
            seq[idx] = nums[i];
        }
    }
    function binarySearch(num) {
        let l = 0, r = seq.length;
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (seq[mid] < num) l = mid + 1;
            else if (seq[mid] >= num) r = mid;
        }
        return l;
    }
    return seq.length;
};