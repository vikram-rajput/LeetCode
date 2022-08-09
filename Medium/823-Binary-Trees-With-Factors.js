/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
    arr.sort((a, b) => a - b)
    let len = arr.length, fmap = new Map(), ans = 0
    for (let i = 0; i < len; i++) {
        let num = arr[i], ways = 1, lim = Math.sqrt(num)
        for (let j = 0, fA = arr[0]; fA <= lim; fA = arr[++j]) {
            let fB = num / fA
            if (fmap.has(fB))
                ways += fmap.get(fA) * fmap.get(fB) * (fA === fB ? 1 : 2)
        }
        fmap.set(num, ways), ans += ways
    }
    return ans % 1000000007
}