/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    let occurance = Array(128).fill(0);
    
    for(let letter of s.split("")){
        occurance[letter.charCodeAt(0)]++;
    }
    
    let length = 0;
    for(let occ of occurance){
        length += occ % 2 == 0 ? occ : occ -1;
    }
    if( length < s.length) length++
    return length;
};