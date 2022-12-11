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
 * @return {number}
 */
 var maxPathSum = function(root) {
    let max = -Infinity;
  recurse(root);
  return max;
  function recurse(node) {
    if (!node) return 0;
    let leftMax = recurse(node.left);
    let rightMax = recurse(node.right);
    let childMax = Math.max(leftMax, rightMax);
    let oneMax = Math.max(node.val, node.val + childMax);
    let allMax = Math.max(oneMax, leftMax + rightMax + node.val);
    max = Math.max(max, allMax);
    return oneMax;
  }  
};