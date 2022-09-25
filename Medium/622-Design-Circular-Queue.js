    /**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.arr = Array(k);
 this.capacity = k;
 this.size = 0;
 this.head = -1;
 this.tail = -1;
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.size === this.capacity) return false;
 if (this.tail === -1) { // nothing in the queue, this is the first element.
   this.head = 0;
   this.tail = 0;
 } else {
   this.tail = (this.tail + 1) % this.capacity;
 }
 this.arr[this.tail] = value;
 this.size++;
 return true;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
 if (this.size === 0) return false;
 if (this.head === this.tail) { // if there is only 1 element left in the queue, set both pointers to -1.
   this.head = -1;
   this.tail = -1;
 } else {
   this.head = (this.head + 1) % this.capacity;
 }
 this.size--;
 return true;  
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
   if (this.size === 0) return -1;
 return this.arr[this.head];
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
     if (this.size === 0) return -1;
 return this.arr[this.tail];
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
   return this.size === 0; 
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
   return this.size === this.capacity;  
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/