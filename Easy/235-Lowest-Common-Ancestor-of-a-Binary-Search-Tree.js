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
    let result = null;
    
    const dfs = (node) =>{
        if (node == null) return false;
        let left = dfs(node.left);
        let right = dfs(node.right);
        let currNode = node === p || node === q;
        if( left + right + currNode >= 2) result = node;
        return left || right || currNode;
    }
    dfs(root);
    return result;
};