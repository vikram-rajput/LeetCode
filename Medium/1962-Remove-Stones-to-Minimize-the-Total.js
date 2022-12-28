/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    let heap = new MaxHeap(), sum = 0;
    for (var pile of piles) heap.add(pile), sum += pile;
    while (k > 0) {
      let curr = heap.remove();
      if (piles[0] === 0) return 0;
      let toTake = Math.floor(curr / 2);
      sum -= toTake;
      curr -= toTake;
      k--;
      heap.add(curr);
    }
    return sum;
};

class MaxHeap {
    constructor() {
      this.values = [];
    }
    add(value) {
      let pushed = this.values.push(value);
      let currIdx = this.values.length - 1;
      let parentIdx = Math.floor((currIdx - 1) / 2);
      while (parentIdx >= 0 && this.values[parentIdx] < this.values[currIdx]) {
        [this.values[parentIdx], this.values[currIdx]] = [this.values[currIdx], this.values[parentIdx]];
        currIdx = parentIdx;
        parentIdx = Math.floor((currIdx - 1) / 2);
      }
      return pushed;
    }
    remove() {
      if (!this.values.length) return -1;
      let currIdx = 0;
      [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
      let removed = this.values.pop();
      let leftIdx = currIdx * 2 + 1, rightIdx = currIdx * 2 + 2;
      function getSmaller(vals, leftIdx, rightIdx) {
        if (rightIdx < vals.length) {
          if (vals[leftIdx] > vals[rightIdx]) {
            return leftIdx;
          } return rightIdx;
        } else {
          if (leftIdx < vals.length) return leftIdx;
          return -1;
        }
      }
      let smallerChild = getSmaller(this.values, leftIdx, rightIdx);
      while (smallerChild > -1 && this.values[smallerChild] > this.values[currIdx]) {
        [this.values[currIdx], this.values[smallerChild]] = [this.values[smallerChild], this.values[currIdx]];
        currIdx = smallerChild;
        leftIdx = currIdx * 2 + 1, rightIdx = currIdx * 2 + 2;
        smallerChild = getSmaller(this.values, leftIdx, rightIdx);
      }
      return removed;
    }
  }