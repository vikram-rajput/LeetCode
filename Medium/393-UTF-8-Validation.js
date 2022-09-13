/**
 * @param {number[]} data
 * @return {boolean}
 */
 var validUtf8 = function(data) {
    let bytes = 0;
  for (let num of data) {
    if (bytes === 0) {
      bytes = getBytes(num) - 1;
      if (bytes === -1) return false; // not a valid first byte 
    } else {
      if (num >> 6 !== 0b10) return false; // not a valid following byte
      bytes--;
    }
  }
  return bytes === 0;
  
  function getBytes(num) {
    if (num >> 3 === 0b11110) return 4;
    if (num >> 4 === 0b1110) return 3;
    if (num >> 5 === 0b110) return 2;
    if (num >> 7 === 0) return 1;
    return 0;
  }
};