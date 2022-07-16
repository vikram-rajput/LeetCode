/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    maxP = 0;
    leftIdx = 0; // buy
    rightIdx = 1; // sell
    
    while(rightIdx < prices.length){
        currentProfit = 0
         if(prices[leftIdx] < prices[rightIdx]){
             profit = prices[rightIdx] - prices[leftIdx];
             maxP = Math.max(maxP, profit)
         } else{
             leftIdx = rightIdx;
         }
        rightIdx++;
    }
    return maxP;
};