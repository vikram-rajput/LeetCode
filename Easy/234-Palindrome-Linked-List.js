/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    function isPalindromRecursive(recursiveHead) {
        // Reached the end of the list
        if (recursiveHead == null) {
            return true;
        }

        // Recursively traverse the linked list
        const next = isPalindromRecursive(recursiveHead.next);

        // Check if the current level of the linked list mirrors its mirror point
        const valid = recursiveHead.val === head.val;

        // Move the original linked list inward
        head = head.next;
        return next && valid;
    }
    return isPalindromRecursive(head); 
};