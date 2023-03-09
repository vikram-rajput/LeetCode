/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // find mid-point (start of second half)
 let slow = head, fast = head;
 while (fast && fast.next) {
   slow = slow.next;
   fast = fast.next.next;
 }

 // reverse second-half 
 function reverse(node) {
   let prev = null;
   while (node) {
     let next = node.next;
     node.next = prev;
     prev = node;
     node = next;
   }
   return prev;
 }

 let list2 = reverse(slow), list1 = head;
 // merge back
 while (list1.next && list2.next) {
   let list1Next = list1.next;
   let list2Next = list2.next;
   list1.next = list2;
   list2.next = list1Next;
   list1 = list1Next;
   list2 = list2Next;
 }
 return head; 
};