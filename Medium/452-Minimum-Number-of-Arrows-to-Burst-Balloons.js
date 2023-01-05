/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let ans = 1;
  points.sort((a, b) => a[1] - b[1]);
  let end = points[0][1];
  for (var [currStart, currEnd] of points) {
    if (currStart > end) {
      ans++;
      end = currEnd;
    }
  }
  return ans;
};