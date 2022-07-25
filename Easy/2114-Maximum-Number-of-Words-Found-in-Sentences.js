/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    var max = 0;
    for(let i = 0; i< sentences.length; i++){
       var sentence =  sentences[i].split(' ');
        if (max < sentence.length){
            max = sentence.length;
        }
    }
    return max;
};