/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    let filtered = [];
    for (var i = 0; i < p.length; i++) {
      if (p[i] !== '*') filtered.push([p[i], false]);
      else filtered[filtered.length - 1][1] = true;
    }
    p = filtered;
    let memo = Array(s.length + 1);
    for (var i = 0; i <= s.length; i++) memo[i] = Array(p.length);
    return recurse(0, 0);
  
    function recurse(i, j) {
      if (j === p.length) return i === s.length;
      if (memo[i][j] !== undefined) return memo[i][j];
      memo[i][j] = false;
      if (p[j][1]) {
        // match 0 or more of p[j][0]
        // match 0
        if (recurse(i, j + 1)) return memo[i][j] = true;
        // match 1
        if (i < s.length) {
          if (p[j][0] === '.') return memo[i][j] = recurse(i + 1, j);
          else if (s[i] === p[j][0]) return memo[i][j] = recurse(i + 1, j);
        }
      } else {
        // must match p[j][0]
        // . matches any character
        if (p[j][0] === '.') {
          if (i < s.length) return memo[i][j] = recurse(i + 1, j + 1);
        } else {
          // must match character
          if (i < s.length && s[i] === p[j][0]) return memo[i][j] = recurse(i + 1, j + 1);
        }
      }
      return memo[i][j];
    }   
  };