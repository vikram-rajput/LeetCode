/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows < 1) { return [] }
    if (numRows === 1) return [[1]];
    const result = [[1]];
    for (var i = 1; i < numRows; i++) {
        let preRow = result[i - 1];
        const curRow = [];
        curRow.push(1);
        for (let j = 1; j < preRow.length; j++) {
            curRow[j] = preRow[j] + preRow[j - 1];
        }
        curRow.push(1);
        result.push(curRow);
    }
    return result;
};