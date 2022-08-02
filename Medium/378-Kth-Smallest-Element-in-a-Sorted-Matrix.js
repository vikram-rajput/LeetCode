/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
    let len = matrix.length;
    let left = matrix[0][0];
    let right = matrix[len-1][len-1];
    let m;
    while(left < right){
        m = Math.floor((left+right)/2);
        let lessOrEqualM = 0;
        matrix.forEach(row => {
            row.forEach(num => {
                if(num<=m) lessOrEqualM++;
            })
        })
        if(lessOrEqualM>=k) right = m;
        if(lessOrEqualM<k) left = m + 1;
    }
return left; 
};