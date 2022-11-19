/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
 var outerTrees = function(trees) {
    function crossProduct(p, q, r) {
    return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
  }
  trees = trees.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  })
  let hull = [];
  for (var i = 0; i < trees.length; i++) {
    while (hull.length >= 2 && crossProduct(hull[hull.length - 2], hull[hull.length - 1], trees[i]) > 0) {
      hull.pop();
    }
    hull.push(trees[i]);
  }
  hull.pop();
  for (var i = trees.length - 1; i >= 0; i--) {
    while (hull.length >= 2 && crossProduct(hull[hull.length - 2], hull[hull.length - 1], trees[i]) > 0) {
      hull.pop();
    }
    hull.push(trees[i]);
  }
  let set = new Set(hull);
  return Array.from(set);
};