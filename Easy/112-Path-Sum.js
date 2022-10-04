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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    return recurse(root, targetSum);
  function recurse(node, target) {
    if (!node) return false;
    target -= node.val;
    if (target === 0 && !node.left && !node.right) return true;
    return recurse(node.left, target) || recurse(node.right, target);
  } 
};