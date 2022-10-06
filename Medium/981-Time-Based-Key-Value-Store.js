
var TimeMap = function() {
    this.map = {}; 
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
     if (!this.map[key]) this.map[key] = [];
  this.map[key][timestamp] = value;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map[key]) return "";
  for (var i = timestamp; i >= 0; i--) {
    if (this.map[key][i]) return this.map[key][i];
  }
  return "";
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */