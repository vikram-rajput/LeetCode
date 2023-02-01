/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1.length > str2.length) return gcdOfStrings(str2, str1);
    let n = str1.length;
    for (let i = n; i >= 1; i--) {
        if (isMatch(str1, str1, i) && isMatch(str2, str1, i)) {
            return str1.slice(0, i);
        }
    }
    return "";
};

function isMatch(str, prefixStr, prefixLen) {
    if (str.length % prefixLen) return false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== prefixStr[i % prefixLen]) {
            return false;
        }
    }
    return true;
}