/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
 var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let area1 = (ax2 - ax1) * (ay2 - ay1);
 let area2 = (bx2 - bx1) * (by2 - by1);
 if (ax2 <= bx1 || ax1 >= bx2 || ay1 >= by2 || ay2 <= by1) {
   return area1 + area2;
 }
 let width = Math.min(ax2, bx2) - Math.max(ax1, bx1);
 let height = Math.min(ay2, by2) - Math.max(ay1, by1);
 return area1 - width * height + area2;
};