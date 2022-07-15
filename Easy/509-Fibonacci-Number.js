/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, cache) {
    cache = cache || [];
    if (cache[n]) {
        return cache[n];
    } else {
        if (n == 0) { return 0; }
        else if (n < 3) { return 1; }
        else {
            cache[n] = fib(n - 2, cache) + fib(n - 1, cache);
        }
    }
    return cache[n];
};
