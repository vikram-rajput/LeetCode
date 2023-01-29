    /**
     * @param {number} capacity
     */
    var LFUCache = function (capacity) {
        this.nodeMap = {};
        this.freqMap = {};
        this.capacity = capacity;
        this.minFreq = 1;
        this.size = 0;
    };

    /** 
     * @param {number} key
     * @return {number}
     */
    LFUCache.prototype.get = function (key) {
        if (!this.nodeMap[key]) return -1;
        let node = this.nodeMap[key];
        let oldFreq = node.freq;
        let list = this.freqMap[oldFreq];
        list.removeNode(node);
        node.freq++;
        let newFreq = node.freq;
        if (list.isEmpty() && this.minFreq === oldFreq) this.minFreq++;
        if (!this.freqMap[newFreq]) this.freqMap[newFreq] = new DoublyLinkedList();
        this.freqMap[newFreq].insertHead(node);
        return node.val;
    };

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    LFUCache.prototype.put = function (key, value) {


        if (this.nodeMap[key]) {
            let node = this.nodeMap[key];
            node.val = value;
            let oldFreq = node.freq;
            let list = this.freqMap[oldFreq];
            list.removeNode(node);
            if (list.isEmpty() && this.minFreq === oldFreq) this.minFreq++;
            node.freq++;
            let newFreq = node.freq;
            if (!this.freqMap[newFreq]) this.freqMap[newFreq] = new DoublyLinkedList();
            this.freqMap[newFreq].insertHead(node);
        } else {
            if (this.capacity === 0) return;
            let newNode = new Node(key, value);
            if (!this.freqMap[1]) this.freqMap[1] = new DoublyLinkedList();
            let list = this.freqMap[1];
            if (this.size === this.capacity) {
                let removedKey = this.freqMap[this.minFreq].removeTail();
                delete this.nodeMap[removedKey];
                this.size--;
            }
            this.minFreq = 1;
            this.size++;
            list.insertHead(newNode);
            this.nodeMap[key] = newNode;
        }
    };

    /** 
     * Your LFUCache object will be instantiated and called as such:
     * var obj = new LFUCache(capacity)
     * var param_1 = obj.get(key)
     * obj.put(key,value)
     */

    class Node {
        constructor(key, val) {
            this.key = key;
            this.val = val;
            this.next = null;
            this.prev = null;
            this.freq = 1;
        }
    }
    // dummy head and tail
    class DoublyLinkedList {
        constructor() {
            this.head = new Node(null, null);
            this.tail = new Node(null, null);
            this.head.next = this.tail;
            this.tail.prev = this.head;
        }
        insertHead(node) {
            node.next = this.head.next;
            node.prev = this.head;
            this.head.next.prev = node;
            this.head.next = node;
        }
        insertTail(node) {
            node.prev = this.tail.prev;
            node.next = this.tail;
            this.tail.prev.next = node;
            this.tail.prev = node;
        }
        removeHead() {
            let head = this.head.next;
            this.removeNode(head);
            return head.val;
        }
        removeNode(node) {
            if (!node.prev && !node.next) return;
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.prev = null;
            node.next = null;
        }
        removeTail() {
            let tail = this.tail.prev;
            this.removeNode(tail);
            return tail.key;
        }
        isEmpty() {
            return this.head.next.val === null;
        }
    }