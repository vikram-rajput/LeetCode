/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let alpha = {};
    for (var i = 0; i < order.length; i++) alpha[order[i]] = (alpha[order[i - 1]] || 0) + 1;
    const isSmaller = (word1, word2) => {
        for (var i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) {
                if (alpha[word1[i]] < alpha[word2[i]]) return true;
                else if (alpha[word1[i]] > alpha[word2[i]]) return false;
            }
        }
        if (word1.length > word2.length) return false;
        return true;
    }
    for (var j = 0; j < words.length - 1; j++) {
        if (!isSmaller(words[j], words[j + 1])) return false;
    }
    return true;
};