/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let uppercase = 0, lowercase = 0;
  for (var char of word) {
    if (char >= 'a' && char <= 'z') lowercase++;
    else uppercase++;
  }
  if (uppercase === 0 || lowercase === 0) return true;
  if (word[0] >= 'A' && word[0] <= 'Z' && uppercase === 1) return true;
  return false;
};