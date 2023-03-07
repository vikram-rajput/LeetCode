/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let low = 1, high = 100000000000000 + 1;
  while (low < high) {
    let mid = Math.floor(low + ( high - low) / 2);
    if (isEnough(mid)) high = mid;
    else low = mid + 1;
  }
  return low;

  function isEnough(minTime) {
    // for each bus, Math.floor(minTime / time[i])
    let trips = 0;
    for (let i = 0; i < time.length; i++) {
      trips += Math.floor(minTime / time[i]);
    }
    return trips >= totalTrips;
  }
};