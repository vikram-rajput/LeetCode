/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.size = 0;
  this.head = head;
  this.nodes = [];
  let node = head;
  while (node) {
    this.nodes.push(node.val);
    this.size++;
    node = node.next;
  }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
     let randomIdx = Math.floor(Math.random() * this.size);
  return this.nodes[randomIdx];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */