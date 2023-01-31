/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
    let n = scores.length,
        maxAge = Math.max(...ages);
    let memo = Array(n).fill(0).map(() => Array(maxAge + 1).fill(-1)),
        players = [];
    for (let i = 0; i < n; i++) players.push([scores[i], ages[i]]);
    players.sort((a, b) => b[0] === a[0] ? b[1] - a[1] : b[0] - a[0]); // sort by score (desc) then by age (desc)
    return dp(0, maxAge);

    function dp(i, prevAge) {
        if (i === n) return 0;
        if (memo[i][prevAge] !== -1) return memo[i][prevAge];

        let max = dp(i + 1, prevAge); // don't take ith player
        let [score, age] = players[i];
        if (age <= prevAge) { // can only take ith player if the age is less than or equal to prevAge
            max = Math.max(max, dp(i + 1, age) + score);
        }
        return memo[i][prevAge] = max;
    }
};