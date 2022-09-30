/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
 var getSkyline = function(buildings) {
    let points = new Set();
  for (var [start, end] of buildings) {
    points.add(start);
    points.add(end);
  }
  points = [...points];
  points.sort((a, b) => a - b);

  let res = [];
  for (var point of points) {
    let maxHeight = 0;
    for (var i = 0; i < buildings.length; i++) {
      if (buildings[i][0] > point) break;
      if (buildings[i][1] > point) maxHeight = Math.max(maxHeight, buildings[i][2]);
    }
    if (!res.length || res[res.length - 1][1] !== maxHeight) {
      res.push([point, maxHeight]);
    }
  }
  return res;
};