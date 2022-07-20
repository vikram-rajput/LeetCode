/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function (image, sr, sc, newColor) {

    let m = image.length
    let n = image[0].length
    let oldColor = image[sr][sc]// Appoint [sr][sc] The color on the position is the old color 
    if (oldColor == newColor) {
    // When it is found that the color of the specified position is consistent with the change color , No replacement necessary , Return the original array 
    return image
    }
    var fill = function (i, j) {
    
    // With i,j Centered , Beyond the limit 、 And image[sr][sc]（ Specify the color at the location ） inequality , No operation 
    if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] != oldColor) {
    
    return
    }
    // eligible - Change colors 
    image[i][j] = newColor
    // The upper, lower, left and right numbers are recursive 
    fill(i - 1, j)
    fill(i, j - 1)
    fill(i + 1, j)
    fill(i, j + 1)
    }
    fill(sr, sc)
    return image
    };