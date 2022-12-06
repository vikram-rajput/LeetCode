/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var oddEvenList = function(head) {
    if (!head) return null;
  let evenHead = head.next; // save the first even node as evenHead
  let odd = head, even = evenHead;
  while (even && even.next) { // while even is valid and even has a next node
    odd.next = even.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
  }   
  odd.next = evenHead; // attach the even list at the end of the odd list
  return head; 
};