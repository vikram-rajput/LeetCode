/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
 var largestOverlap = function(img1, img2) {
    let n = img1.length, ans = 0;
   for (let i = 0; i < n; i++) {
     for (let j = 0; j < n; j++) {
       ans = Math.max(
         ans,
         getOverlap(-i, -j),
         getOverlap(-i, j),
         getOverlap(i, -j),
         getOverlap(i, j)
       )
     }
   }
   return ans;
   
   function getOverlap(rowOffset, colOffset) {
     let overlap = 0;
     for (let i = 0; i < n; i++) {
       for (let j = 0; j < n; j++) {
         let newRow = i + rowOffset, newCol = j + colOffset;
         if (newRow < 0 || newRow >= n || newCol < 0 || newCol >= n) continue;
         if (img1[newRow][newCol] === 1 && img2[i][j] === 1) overlap++;
       }
     }
     return overlap;
   }   
 };