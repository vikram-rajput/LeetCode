/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
    words.sort((a, b) => a.length - b.length);
    let strings = new Set(),
        res = [];
    for (var word of words) {
        if (isConcatenated(word)) res.push(word);
        strings.add(word);
    }
    return res;

    function isConcatenated(word) {
        let n = word.length,
            dp = Array(n).fill(false);
        for (var i = 0; i < n; i++) {
            for (var j = 0; j <= i; j++) {
                if (j !== 0 && !dp[j - 1]) continue;
                if (strings.has(word.slice(j, i + 1))) {
                    dp[i] = true;
                    break; // if we have a match, we don't need to keep checking because we don't care which words match, we have matched up to position i.
                }
            }
        }
        return dp[n - 1];
    }
};