/**
 * @param {string} dominoes
 * @return {string}
 */
 var pushDominoes = function(dominoes) {
    let n = dominoes.length, left = Array(n), right = Array(n);
  for (let j = 0, i = -Infinity; j < n; j++) {
    if (dominoes[j] === 'L' || dominoes[j] === 'R') i = j;
    else left[j] = i;
  }
  for (let j = n - 1, i = Infinity; j >= 0; j--) {
    if (dominoes[j] === 'L' || dominoes[j] === 'R') i = j;
    else right[j] = i;
  }
  
  let res = Array(n);
  for (let i = 0; i < n; i++) {
    if (dominoes[i] === '.') {
      res[i] = getDirection(i);
    } else res[i] = dominoes[i];
  }
  return res.join("");
  
  function getDirection(index) {
    let leftIndex = left[index], rightIndex = right[index];
    let leftDist = index - leftIndex, rightDist = rightIndex - index;
    if (dominoes[leftIndex] === '.' && dominoes[rightIndex] === Infinity) return '.';
    if (dominoes[leftIndex] !== 'R' && dominoes[rightIndex] !== 'L') return '.'; // unaffected
    if (leftDist < rightDist || rightDist < leftDist) return leftDist < rightDist ? dominoes[leftIndex] : dominoes[rightIndex]; // follow closest
    return dominoes[leftIndex] === dominoes[rightIndex] ? dominoes[leftIndex] : '.'; // equal distance on both sides
  }
};