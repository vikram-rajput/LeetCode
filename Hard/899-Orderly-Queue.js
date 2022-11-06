/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var orderlyQueue = function(s, k) {
    if (k === 1) {
      let min = s;
      for (var i = 0; i < s.length - 1; i++) {
        s = s.substr(1) + s[0];
        if (min > s) min = s;
      }
      return min;
    } else {
      return s.split("").sort().join("");
    }   
  };