/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
    if (k === 0) return 0;
 let buy = Array(k).fill(-Infinity);
 let sell = Array(k).fill(0);
 for (var price of prices) {
   for (var i = 0; i < k; i++) {
     buy[i] = Math.max(buy[i], (sell[i - 1] || 0) - price);
     sell[i] = Math.max(sell[i], buy[i] + price);
   }
 }
 return sell[k - 1];
};