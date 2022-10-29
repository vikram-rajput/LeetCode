/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
 var earliestFullBloom = function(plantTime, growTime) {
    let n = plantTime.length;
  let plants = [];
  for (var i = 0; i < n; i++) {
    plants.push([plantTime[i], growTime[i]]);
  }
  plants.sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0];
    return b[1] - a[1];
  });

  let time = 0, fullBloomTime = 0;
  for (i = 0; i < n; i++) {
    time += plants[i][0];
    fullBloomTime = Math.max(fullBloomTime, time + plants[i][1]);
  }
  return fullBloomTime;
};