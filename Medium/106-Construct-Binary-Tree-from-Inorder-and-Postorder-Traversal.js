/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let idx = {};
 for (var i = 0; i < inorder.length; i++) idx[inorder[i]] = i;
 return recurse(0, postorder.length - 1);

 function recurse(start, end) {
   if (start > end) return null;
   let val = postorder.pop();
   let node = new TreeNode(val);
   node.right = recurse(idx[val] + 1, end);
   node.left = recurse(start, idx[val] - 1);
   return node;
 }   
};