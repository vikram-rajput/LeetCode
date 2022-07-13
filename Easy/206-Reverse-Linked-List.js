/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Runtime: 99 ms, faster than 42.83% of JavaScript online submissions for Reverse Linked List.
* Memory Usage: 44.4 MB, less than 43.54% of JavaScript online submissions for Reverse Linked List.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    var prev = null;
    var curr = head;
    while (curr){
        let nxt = curr.next;
        curr.next = prev;
        prev = curr
        curr = nxt;
    }
    return prev;
};