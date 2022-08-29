/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let sol = Array.from({ length: s.length }, () => 0);
for (let i = 0; i < s.length; i++) {
  sol[indices[i]] = s[i];
}
return sol.join("");
};