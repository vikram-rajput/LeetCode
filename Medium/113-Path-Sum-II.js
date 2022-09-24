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
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    if (!root) return [];
    let paths = [];
    dfs(root, [], 0);
    function dfs(node, path, sum) {
      if (!node) return;
      sum += node.val;
      if (!node.left && !node.right && sum === targetSum) {
        path.push(node.val);
        paths.push([...path]);
        path.pop();
        return;
      }
      path.push(node.val);
      dfs(node.left, path, sum);
      dfs(node.right, path, sum);
      path.pop();
    }
    return paths;
};