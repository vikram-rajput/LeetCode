/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
  let i = 0, j = people.length - 1;
  let ans = 0;
  while (i <= j) {
    let weight = i === j ? people[i] : people[i] + people[j];
    if (weight > limit) j--;
    else i++, j--;
    ans++;
  }
  return ans;
};