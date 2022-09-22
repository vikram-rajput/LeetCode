/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let sol = s.split(" ").map((word) => {
    let rev = word.split("");
    for (let i = 0, j = word.length - 1; i < j; i++, j--) {
      let temp = rev[i];
      rev[i] = rev[j];
      rev[j] = temp;
    }
    return rev.join("");
  });
  return sol.join(" ");
};