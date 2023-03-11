/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let values = [], node = head;
   while (node) {
     values.push(node.val);
     node = node.next;
   }
   return dfs(0, values.length - 1);
   
   function dfs(left, right) {
     if (left > right) return null;
     let mid = Math.floor((left + right) / 2);
     let node = new TreeNode(values[mid]);
     node.left = dfs(left, mid - 1);
     node.right = dfs(mid + 1, right);
     return node;
   } 
 };