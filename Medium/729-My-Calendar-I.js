
var MyCalendar = function() {
    this.calendar = {start: -1, end: -1, next: {start: Infinity, end: Infinity}}
};

/** 
* @param {number} start 
* @param {number} end
* @return {boolean}
*/
MyCalendar.prototype.book = function(start, end) {
   let curr = this.calendar, last = curr
       while (start >= curr.end)
           last = curr, curr = curr.next
       if (curr.start < end)
           return false
       last.next = {start: start, end: end, next: curr}
       return true
};

/** 
* Your MyCalendar object will be instantiated and called as such:
* var obj = new MyCalendar()
* var param_1 = obj.book(start,end)
*/