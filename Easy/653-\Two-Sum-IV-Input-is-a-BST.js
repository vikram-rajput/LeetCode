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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    let arr = [];
  inOrder(root);
  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    arr.push(node.val);
    inOrder(node.right);
  }
  let l = 0, r = arr.length - 1;
  while (l < r) {
    let sum = arr[l] + arr[r];
    if (sum === k) return true;
    if (sum > k) r--;
    else l++;
  }
  return false;
};