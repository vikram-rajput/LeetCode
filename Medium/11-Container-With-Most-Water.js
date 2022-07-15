/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var maxAreaofWater = 0;
    var left = 0;
    var right = height.length - 1;

    while (left < right) {
        var temp = (right - left) * Math.min(height[left], height[right]);
        maxAreaofWater = Math.max(maxAreaofWater, temp);
        if (height[left] < height[right]) {
            left++
        }
        else {
            right--
        }
    }
    return maxAreaofWater;
};