var RandomizedSet = function() {
    this.map = {};
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map[val] === 0 || this.map[val]) return false;
    this.map[val] = this.arr.length;
    this.arr.push(val);
    return true;
  };

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map[val] && this.map[val] !== 0) return false;
    let index = this.map[val];
    let lastIdx = this.arr.length - 1;
    let lastItem = this.arr[lastIdx];
    // replace the item at index of item to remove with the value of the last item in arr.
    this.arr[index] = lastItem;
    // pop the last item off arr
    this.arr.pop();
    // change the index of the previous last item to be the index of the item that was removed
    this.map[lastItem] = index;
    // delete the item to be removed from map
    delete this.map[val];
    return true; 
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
     let index = Math.floor(Math.random() * this.arr.length);
    return this.arr[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */