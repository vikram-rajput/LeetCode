/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
    var maxAreaOfWater = 0;
    var left = 0;
    var right = height.length - 1;

    while (left < right) {
        var temp = (right - left) * Math.min(height[left], height[right]);
        maxAreaOfWater = Math.max(maxAreaOfWater, temp);
        if (height[left] < height[right]) {
            left++
        }
        else {
            right--
        }
    }
    return maxAreaOfWater;
};