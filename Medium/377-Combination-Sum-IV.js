/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    var memo = {}
    function helper(target) {
        if (target < 0) return 0;
        if (target == 0) return 1;
        if (target in memo) return memo[target];
        var res = 0, n = nums.length
        for (var i = 0; i < n; ++i) {
            res += helper(target - nums[i]);
        }
        return memo[target] = res;
    }
    return helper(target);
}