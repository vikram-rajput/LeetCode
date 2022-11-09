var StockSpanner = function() {
    this.stack = [[-1, -1]]; 
    this.idx = -1;
};

/** 
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function(price) {
   this.idx++;
 while (this.stack.length > 1 && this.stack[this.stack.length - 1][0] <= price) {
   this.stack.pop();
 }
 let lastIdx = this.stack[this.stack.length - 1][1];
 this.stack.push([price, this.idx]);
 return this.idx - lastIdx;
};

/** 
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/