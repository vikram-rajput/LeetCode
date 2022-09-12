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




// solution 2
let points = 0; // our rolling score
let result = 0; // to record highest score we've seen
let i = 0; // counter in the front, for spending power and gaining points
let j = tokens.length - 1; // counter in the back, for gaining power
// sort so we get the cheapest tokens up front
tokens.sort((a, b) => a - b);
while (i <= j) {
    // look at a token at the start, can we use it to gain score?
    if (P >= tokens[i]) {
        // if so, lower your power and raise your score
        P = P - tokens[i];
        points = points + 1;
        // Now record the best result we've seen
        // This covers the scenario where we later spend a point to gain power
        // but we we're never able to capitalize on it by turning that power
        // into more scoring points
        result = Math.max(result, points);
        // next round we'll consider the next token to spend power on
        i++;
    } else if (points > 0) {
        // At this time we can't gain score with a token in front, so let's
        // spend a point of our score to gain more power
        points = points - 1;
        P = P + tokens[j];
        // next round we'll consider the next highest power to gain
        j--;
    } else {
        // if we can't do either, stop
        break;
    }
}
return result;