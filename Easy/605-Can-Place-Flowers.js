/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let len = flowerbed.length, count = 0;
  let i = 0;
  while (i < len) {
    if (flowerbed[i] === 1) i += 2;
    else {
      if (i === len - 1 || flowerbed[i + 1] === 0) {
        count++;
        i += 2;
      } else i += 3;
    }
  }
  return count >= n;
};