/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => b - a);
    let n = satisfaction.length, sum = 0;
    let score = 0;
    for (let i = 0; i < n; i++) {
      sum += satisfaction[i];
      if (sum < 0) break;
      score += sum;
    }
    return score;  
  };