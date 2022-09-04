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
 * @return {number[][]}
 */
 var verticalTraversal = function(root) {
    let nodes = [];
  dfs(root, 0, 0);

  nodes.sort((a, b) => { // sort by column, then row, then node value.
    if (a.col === b.col) {
      if (a.row === b.row) return a.val - b.val;
      return a.row - b.row;
    }
    return a.col - b.col;
  })

  let res = [];
  for (var i = 0; i < nodes.length; i++) { // group together nodes that share the same column, and filter to only keep the node value.
    if (i === 0 || nodes[i].col !== nodes[i - 1].col) res.push([]); 
    res[res.length - 1].push(nodes[i].val);
  }
  return res;

  function dfs(node, row, col) { // get information from each node and store in 'nodes'
    if (!node) return;
    nodes.push({val: node.val, row, col});
    dfs(node.left, row + 1, col - 1);
    dfs(node.right, row + 1, col + 1);
  }
};