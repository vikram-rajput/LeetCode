/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    if (n === 1) return "1";
let str = countAndSay(n - 1);
let res = "", count = 1;
for (var i = 0; i < str.length; i++) {
  if (i === str.length - 1 || str[i] !== str[i + 1]) {
    res += count.toString() + str[i];
    count = 1;
  } else {
    count++;
  }
}
return res; 
};