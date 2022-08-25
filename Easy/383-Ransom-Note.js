/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    var rArr = ransomNote.split("");
    var mArr = magazine.split("");
    var hMap = {};
    for(let i = 0; i <= mArr.length; i++){
        if(hMap[mArr[i]]) ++hMap[mArr[i]];
        else hMap[mArr[i]] = 1;
    }
    for(let i = 0; i <= rArr.length; i++){
        if(hMap[rArr[i]] === undefined || hMap[rArr[i]] <= 0) return false
       --hMap[rArr[i]];
    }
    return true;
};