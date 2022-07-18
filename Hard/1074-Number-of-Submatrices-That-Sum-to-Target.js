/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
 var numSubmatrixSumTarget = function(matrix, target) {
    let xlen = matrix[0].length, ylen = matrix.length,
        ans = 0, res = new Map()
    for (let i = 0, r = matrix[0]; i < ylen; r = matrix[++i]) 
        for (let j = 1; j < xlen; j++)
            r[j] += r[j-1]
    for (let j = 0; j < xlen; j++)
        for (let k = j; k < xlen; k++) {
            res.clear(), res.set(0,1), csum = 0
            for (let i = 0; i < ylen; i++) {
                csum += matrix[i][k] - (j ? matrix[i][j-1] : 0)
                ans += (res.get(csum - target) || 0)
                res.set(csum, (res.get(csum) || 0) + 1)
            }
        }
    return ans
};