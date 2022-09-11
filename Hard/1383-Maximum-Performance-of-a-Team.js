/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
 var maxPerformance = function(n, speed, efficiency, k) {  
    let engineers = [], mod = BigInt(10 ** 9 + 7);
    for (let i = 0; i < n; i++) engineers.push([speed[i], efficiency[i]]);
    engineers.sort((a, b) => a[1] - b[1]);
  
    let ans = 0n, sum = 0n, heap = new PriorityQueue((a, b) => a - b); // min heap
    for (let j = n - 1; j >= 0; j--) {
      let speed = BigInt(engineers[j][0]), efficiency = BigInt(engineers[j][1]);
      sum += speed; // sum of speed
      heap.add(speed);
      if (j < n - k) sum -= heap.remove(); // only keep the k highest speeds
      if (sum * efficiency > ans) ans = sum * efficiency;
    }
    return ans % mod;
  };
  
  class PriorityQueue {
    constructor(comparator = ((a, b) => a - b)) {
      this.values = [];
      this.comparator = comparator;
      this.size = 0;
    }
    add(val) {
      this.size++;
      this.values.push(val);
      let idx = this.size - 1, parentIdx = Math.floor((idx - 1) / 2);
      while (parentIdx >= 0 && this.comparator(this.values[parentIdx], this.values[idx]) > 0) {
        [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]];
        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
      }
    }
    remove() {
      if (this.size === 0) return -1;
      this.size--;
      if (this.size === 0) return this.values.pop();
      let removedVal = this.values[0];
      this.values[0] = this.values.pop();
      let idx = 0;
      while (idx < this.size && idx < Math.floor(this.size / 2)) {
        let leftIdx = idx * 2 + 1, rightIdx = idx * 2 + 2;
        if (rightIdx === this.size) {
          if (this.comparator(this.values[leftIdx], this.values[idx]) > 0) break;
          [this.values[leftIdx], this.values[idx]] = [this.values[idx], this.values[leftIdx]];
          idx = leftIdx;
        } else if (this.comparator(this.values[leftIdx], this.values[idx]) < 0 || this.comparator(this.values[rightIdx], this.values[idx]) < 0) {
          if (this.comparator(this.values[leftIdx], this.values[rightIdx]) <= 0) {
            [this.values[leftIdx], this.values[idx]] = [this.values[idx], this.values[leftIdx]];
            idx = leftIdx;
          } else {
            [this.values[rightIdx], this.values[idx]] = [this.values[idx], this.values[rightIdx]];
            idx = rightIdx;
          }
        } else {
          break;
        }
      }
      return removedVal;
    }
    top() {
      return this.values[0];
    }
    isEmpty() {
      return this.size === 0;
    }
  }