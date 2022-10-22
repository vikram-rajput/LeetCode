/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    let map = {};
    for (var char of t) map[char] = (map[char] || 0) + 1;
    let start = 0, end = 0;
    let min = [];
    let count = Object.keys(map).length;
    while (end <= s.length) {
      // this is a valid substring
      if (count === 0) {
        if (!min.length || min[1] - min[0] > end - start) min[0] = start, min[1] = end;
        let curr = s[start];
        if (map[curr] !== undefined) map[curr]++;
        if (map[curr] > 0) count++;
        start++;
      } else {
        let curr = s[end];
        if (map[curr] !== undefined) map[curr]--;
        if (map[curr] === 0) count--;
        end++;
      }
    }
    return min.length ? s.slice(min[0], min[1]) : "";
};