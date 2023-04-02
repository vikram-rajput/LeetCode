/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    spells = spells.map((spell, idx) => [spell, idx]).sort((a, b) => a[0] - b[0]);
  potions.sort((a, b) => b - a);
  let n = spells.length, m = potions.length;
  let res = Array(n), j = 0;
  for (let i = 0; i < n; i++) {
    let [spell, index] = spells[i];
    while (j < m && spell * potions[j] >= success) j++;
    res[index] = j;
  }
  return res;
};