/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let p2 = head, p1;
   for (var i = 0; i < n; i++) {
     p2 = p2.next;
   }
   if (!p2) return head.next;
   p1 = head;
   while (p2.next) {
     p2 = p2.next, p1 = p1.next;
   }
   p1.next = p1.next.next;
   return head;
};