/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let m = strs.length, n = strs[0].length;
  let toDelete = 0;
  for (let j = 0; j < n; j++) {
    let isSorted = true;
    for (let i = 1; i < m; i++) {
      if (strs[i][j] < strs[i - 1][j]) {
        isSorted = false;
        break;
      }
    }
    if (!isSorted) toDelete++;
  }
  return toDelete;
};