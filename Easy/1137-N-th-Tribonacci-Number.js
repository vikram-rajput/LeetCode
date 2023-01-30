/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    let tri = Array(n + 1);
    tri[0] = 0, tri[1] = 1, tri[2] = 1;
    for (var i = 3; i <= n; i++) {
        tri[i] = tri[i - 3] + tri[i - 2] + tri[i - 1];
    }
    return tri[n];
};