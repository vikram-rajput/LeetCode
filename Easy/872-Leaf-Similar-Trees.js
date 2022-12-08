/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let values1 = [], values2 = [];
   getLeafValues(root2, values2);
   getLeafValues(root1, values1);
   if (values1.length !== values2.length) return false;
   for (let i = 0; i < values1.length; i++) {
     if (values1[i] !== values2[i]) return false;
   }
   return true;
 };
 
 function getLeafValues(node, values) {
   if (!node) return;
   if (!node.left && !node.right) {
     values.push(node.val);
   }
   getLeafValues(node.left, values);
   getLeafValues(node.right, values);
 }