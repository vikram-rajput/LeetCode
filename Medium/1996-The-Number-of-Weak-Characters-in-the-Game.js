/**
 * @param {number[][]} properties
 * @return {number}
 */
 var numberOfWeakCharacters = function(properties) {
    let n = properties.length;
  properties = properties.sort((a, b) => {
    if (a[0] == b[0]) return b[1] - a[1];
    else return a[0] - b[0];
  });
  let count = 0, maxDefense = -Infinity;
  for (var i = n - 1; i >= 0; i--) {
    if (properties[i][1] < maxDefense) count++;
    maxDefense = Math.max(maxDefense, properties[i][1]);
  }
  return count;
};