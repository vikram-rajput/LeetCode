var SummaryRanges = function () {
    this.intervals = []
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (value) {
    const current = [value, value]
    const intervals = this.intervals
    const less = []
    const more = []
    for (let vals of intervals) {
        if (vals[0] > current[1] + 1) {
            more.push(vals)
        } else if (vals[1] + 1 < current[0]) {
            less.push(vals)
        } else {
            current[0] = Math.min(current[0], vals[0])
            current[1] = Math.max(current[1], vals[1])
        }
    }
    this.intervals = [...less, current, ...more]
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
    return this.intervals
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */