/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    let prev = Array(n).fill(Infinity);
    prev[src] = 0;
    let curr = Array(n).fill(Infinity);
    curr[src] = 0;
    for (var i = 0; i <= k; i++) {
        for (var [source, targ, weight] of flights) {
            if (prev[source] !== Infinity) {
                curr[targ] = Math.min(curr[targ], prev[source] + weight);
            }
        }
        prev = [...curr];
    }
    return curr[dst] === Infinity ? -1 : curr[dst];
};