var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    var times = minutesToTest / minutesToDie;
    var result = 0;
    while (Math.pow(times + 1, result) < buckets){
        ++result;
    } 
    return result;
}