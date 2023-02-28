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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = new Map(), dups = [];
    dfs(root);
    return dups;
    
    function dfs(node) {
      if (!node) return '#';
      let values = [node.val];
      values.push(dfs(node.left));
      values.push(dfs(node.right));
      let hash = values.join(",");
      map.set(hash, (map.get(hash) || 0) + 1);
      if (map.get(hash) === 2) dups.push(node);
      return hash;
    }  
  };