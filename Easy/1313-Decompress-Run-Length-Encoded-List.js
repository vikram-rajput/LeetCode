/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let dcomList = [];
    for (let i = 0; i < nums.length; i = i + 2) {
        let freq = nums[i];
        let val = nums[i + 1];

        while (freq !== 0) {
            dcomList.push(val);
            freq--;
        }
    }

    return dcomList;
};