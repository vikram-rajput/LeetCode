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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    let sum = 0;
  dfs(root);
  return sum;

  function dfs(node) {
    if (!node) return;
    if (node.val >= low && node.val <= high) sum += node.val;
    dfs(node.left);
    dfs(node.right);
  } 
};