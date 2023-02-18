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
 * @return {TreeNode}
 */
var invertTree = function(root) {
     let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if (!node) continue;
    if (node.left || node.right) {
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
      stack.push(node.left);
      stack.push(node.right);
    }
  }  
  return root;
};