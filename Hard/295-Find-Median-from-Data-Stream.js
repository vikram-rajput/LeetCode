var MedianFinder = function() {
    this.arr = []; 
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
   let idx = search(this.arr, num);
this.arr.splice(idx, 0, num);
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  let mid = Math.floor(this.arr.length / 2);
if (this.arr.length % 2 === 1) {
  return this.arr[mid];
} else {
  return (this.arr[mid - 1] + this.arr[mid]) / 2;
}
};



/** 
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/

function search(arr, num) {
let low = 0, high = arr.length;
while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] > num) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}
return low;
}
