/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
 var minCost = function(colors, neededTime) {
    let time = 0, maxTime = neededTime[0], totalTime = neededTime[0];
 for (var i = 1; i <= colors.length; i++) {
   if (colors[i] !== colors[i - 1]) {
     time += totalTime - maxTime;
     totalTime = neededTime[i];
     maxTime = neededTime[i];
   } else {
     totalTime += neededTime[i];
     maxTime = Math.max(maxTime, neededTime[i]);
   }
 }  
 return time;
};