/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
    const MOD = Math.pow(10, 9) + 7
    let dp = {}
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 5;

    for (let i = 4; i <= n; i++) {
        dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD
    }
    return dp[n];
};