
var MyCalendarThree = function() {
    this.list = new Map();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    let tmp = this.list.get(start);
    tmp = tmp === undefined ? 1 : ++tmp;
    this.list.set(start, tmp);
    tmp = this.list.get(end);
    tmp = tmp === undefined ? -1 : --tmp;
    this.list.set(end, tmp);
    
    let tmpList = Array.from(this.list);
    tmpList.sort((a, b) => a[0] - b[0]);
    
    let max = 0, val = 0;
    for(let i = 0; i < tmpList.length; ++i){
        let tmp = tmpList[i][1];
        if(tmp !== undefined){
            val += tmp;
            max = Math.max(max, val);
        }
    }
    return max;
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */