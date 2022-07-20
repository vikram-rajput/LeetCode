/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 var numMatchingSubseq = function(s, words) {
    let result = 0;
    words.forEach(word=>{
        let isSub = true;
        let str = s;
        for (let i=0; i<word.length; i++){
            let idx = str.indexOf(word[i]);
            if(idx === -1){
                isSub = false;
                break;
            }else{
                str = str.slice(idx+1);
            }
        }
        if(isSub){
            result ++;
        }
    });
    return result;
};