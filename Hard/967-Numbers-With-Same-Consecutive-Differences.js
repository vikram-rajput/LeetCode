/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
    let res = [];
    for (let i = 1; i <= 9; i++) {
        dfs(i, 1);
    }
    return res;
    function dfs(num, digits) {
        if (digits === n) {
            res.push(num);
            return;
        }
        const lastDigit = num % 10;
        const less = lastDigit - k, more = lastDigit + k;
        if (less >= 0) dfs(num * 10 + less, digits + 1);
        if (k !== 0 && more <= 9) dfs(num * 10 + more, digits + 1);
    }
};