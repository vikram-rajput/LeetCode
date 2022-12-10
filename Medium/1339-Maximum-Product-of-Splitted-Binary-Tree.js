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
var maxProduct = function(root) {
    let ans = 0, totalSum = 0;
    totalSum = dfs(root);
    dfs(root);
    return ans % 1000000007;
    function dfs(node) {
      if (!node) return 0;
      let leftSum = dfs(node.left);
      let rightSum = dfs(node.right);
      let currSum = node.val + leftSum + rightSum;
      ans = Math.max(ans, currSum * (totalSum - currSum));
      return currSum;
    }
};