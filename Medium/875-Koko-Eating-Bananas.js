/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1, right = Math.max(...piles);
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let time = finishTime(mid);
    if (time <= h) right = mid;
    else if (time > h) left = mid + 1;
  }
  return left;

  function finishTime(speed) {
    let time = 0;
    for (var pile of piles) {
      time += Math.ceil(pile / speed);
    }
    return time;
  } 
};