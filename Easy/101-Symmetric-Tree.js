/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root == null) return true
    return compare(root.left, root.right)
};

function compare(l, r) {
    if(l == null && r == null) return true
    if( (l == null && r != null) || (l != null && r == null) ) return false
    
    if(l.val === r.val) {
        if(compare(l.left, r.right) !== false && compare(l.right, r.left) !== false) {
           return true
         } else {
             return false
         }
        
    } else {
        return false
    }
}
