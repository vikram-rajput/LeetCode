/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carry = 0,
        ans = '';
    let i = a.length - 1,
        j = b.length - 1;
    while (i >= 0 || j >= 0) {
        let num1 = +a[i] || 0;
        let num2 = +b[j] || 0;
        let sum = num1 + num2 + carry;
        let keep = sum % 2;
        carry = sum > 1 ? 1 : 0;
        ans = `${keep}${ans}`;
        i--, j--;
    }
    if (carry > 0) ans = `1${ans}`;
    return ans;
};