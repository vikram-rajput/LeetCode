/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
 var mirrorReflection = function(p, q) {
    var i = 1;
    while(i * p % q != 0){
        i++;
    }
    if(i * p / q % 2 == 0) return 2;
    return i % 2;
};