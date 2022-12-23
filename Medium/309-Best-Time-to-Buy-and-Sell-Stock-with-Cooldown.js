/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
  // initial state -> -prices[0] since we bought day 0 stock, we now have a loss.
  let buy = [-prices[0]];
  // initial state -> 0 since we can't sell anything on day 0
  let sell = [0];
  for (var i = 1; i < prices.length; i++) {
    buy[i] = Math.max(buy[i - 1], (sell[i - 2] || 0) - prices[i]);
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
  }
  return sell[n - 1];
};