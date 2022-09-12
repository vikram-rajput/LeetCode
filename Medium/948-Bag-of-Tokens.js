/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
    let points = 0,
        result = 0,
        front = 0;
    let sortedTokens = mergeSort(tokens);
    let back = sortedTokens.length - 1;
    while (front <= back && (power >= sortedTokens[front] || points > 0)) {
        while (front <= back && power >= sortedTokens[front]) {
            points++;
            power -= sortedTokens[front];
            front++;
        }
        result = Math.max(points, result);
        if (front <= back && points > 0) {
            power += sortedTokens[back];
            points--;
            back--;
        }
    }
    return result;
};
const mergeSort = arr => {
    if (arr.length < 2) return arr;
    let mid = arr.length / 2;
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
};
const merge = (left, right) => {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        result.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return result.concat(left.length ? left : right);
}
