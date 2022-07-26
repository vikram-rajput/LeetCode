/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let left
    let right
    if (!root) return null
    if (root === p || root === q) return root

    if (root.left) {
        left = lowestCommonAncestor(root.left, p, q)
    }
    if (root.right) {
        right = lowestCommonAncestor(root.right, p, q)
    }
    
    
    if (left && right) {
        return root
    } else if (left) {
        return left
    } else if (right) {
        return right
    }
};