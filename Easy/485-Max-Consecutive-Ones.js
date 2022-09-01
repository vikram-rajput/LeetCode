/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    var maxConOne = 0;
    var temp = 0;
    for (num of nums) {
        if (num == 1) {
            temp += 1;
        } else {
            maxConOne = Math.max(maxConOne, temp)
            temp = 0
        }
    }
    maxConOne = Math.max(maxConOne, temp);
    return maxConOne;
};